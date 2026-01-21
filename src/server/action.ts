import express, { NextFunction, Request, Response } from 'express';
import { ENV } from './environment';

const app = express();
const PORT = ENV.PORT;
const ROOT_DIR = ENV.ROOT_DIR;

// ==========================
// 미들웨어 설정
// ==========================

// 정적 파일 제공
app.use(express.static(ROOT_DIR));

// JSON 파싱 미들웨어
app.use(express.json());

// URL - encoded 데이터 파싱
app.use(express.urlencoded({ extended: true }));

// 커스텀 로깅 미들웨어
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// ==========================
// 1. 기본 GET 요청
// ==========================
app.get('/', (req: Request, res: Response) => {
    res.send('Express 서버에 오신 것을 환영합니다!');
})

// ==========================
// 2. JSON 응답
// ==========================
app.get('/api/user', (req: Request, res: Response) => {
    res.json({
        id: 1,
        name: '홍길동',
        email: 'hong@example.com',
        age: 20
    });
});

// ==========================
// 3. Query Parameters 읽기
// URL: /search?keyword=typescript&page=1
app.get('/search', (req: Request, res: Response) => {
    const keyword = req.query.keyword;
    const page = req.query.page || 1;

    res.json({
        message: '검색 결과',
        keyword,
        page,
        allQueryParams: req.query,
    })
})

// ==========================
// 4. URL Parameters (Path/Variables) 일기
// URL: /user/123
// ==========================
app.get('/user/:id', (req: Request, res: Response) => {
    const userId = req.params.id;

    res.json({
        message: `사용자 ${userId} 정보`,
        userId,
        allParams: req.params,
    })
})

// ==========================
// 4.여러개의 파라미터
// ==========================
app.get('/post/:year/:month/:day', (req: Request, res: Response) => {
    const { year, month, day } = req.params;

    res.json({
        message: '특정 날짜의 게시물',
        date: `${year}-${month}-${day}`,
        allParams: req.params,
    })
})

// ==========================
// 5. POST 요청 - Request Body 읽기
// ==========================
app.post('/api/user', (req: Request, res: Response) => {
    const { name, email, age } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'name 과 email 은 필수입니다.'
        })
    }

    res.status(201).json({
        message: '사용자가 생성되었습니다.',
        user: {
            id: Date.now(),
            name,
            email,
            age: age || null
        }
    })
})

/**
 * POST 요청 - Request Body 읽기
 * URL: /api/page
 * Body: { menuId: string, menuType: string }
 * Response: { message: string, menuId: string, menuType: string }
 */
app.post('/api/page', (req: Request, res: Response) => {
    const { menuId, menuType } = req.body;

    if (!menuId || !menuType) {
        return res.status(400).json({
            error: 'menuId 와 menuType 은 필수입니다.'
        })
    }

    res.status(200).json({
        message: '페이지 정보',
        menuId,
        menuType,
    })
})

// ==========================
// 6. PUT 요청- 데이터 수정
// ==========================
app.put('/api/user/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    res.json({
        message: '사용자 정보가 업데이트 되었습니다.',
        userId,
        updatedData: { name, email },
    })
})

// ==========================
// 7. DELETE 요청
// ==========================
app.delete('/api/user/:id', (req: Request, res: Response) => {
    const userId = req.params.id;

    res.json({
        message: `사용자 ${userId} 가 삭제되었습니다.`,
        userId,
    })
})

// ==========================
// 8. Headers 읽기
// ==========================
app.get('/api/headers', (req: Request, res: Response) => {
    const userAgent = req.get('User-Agent');
    const contentType = req.get('Content-Type');
    const authrization = req.get('Authorization');

    res.json({
        userAgent,
        contentType,
        authrization,
        allHeaders: req.headers,
    })
})

// ==========================
// 9. 다양한 Response 방법
// ==========================

// 상태 코드와 함께 응답
app.get('/api/created', (req: Request, res: Response) => {
    res.status(201).json({
        message: '리소스가 생성되었습니다.',
    })
})

// 리다이렉트
app.get('/api/old-page', (req: Request, res: Response) => {
    res.redirect('/new-page');
})
app.get('/new-page', (req: Request, res: Response) => {
    res.send('새로운 페이지입니다.');
})

// 파일 다운로드
app.get('/download', (req: Request, res: Response) => {
    res.download(__filename); // 현재 파일을 다운로드
})

// 커스텀 헤더 설정
app.get('/api/custom-headers', (req: Request, res: Response) => {
    res.setHeader('X-Custom-Header', 'Hello, World!');
    res.setHeader('X-Powered-By', 'Express + TypeScript');

    res.json({
        message: '커스텀 헤더가 설정되었습니다.',
    })
})

// ==========================
// 10. 에러 처리
// ==========================
app.get('/api/error', (req: Request, res: Response) => {
    throw new Error('이런 에러가 발생했습니다.');
});

// 404 처리
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        error: '페이지를 찾을 수 없습니다.',
        path: req.url,
    })
})

// 에러 핸들러 미들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('에러 발생: ', err.message);

    res.status(500).json({
        error: '서버 에러가 발생했습니다.',
        message: err.message,
    })
})

app.listen(PORT, () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n📌 테스트 가능한 엔드포인트:');
    console.log(`   GET    http://localhost:${PORT}/`);
    console.log(`   GET    http://localhost:${PORT}/search?keyword=test&page=1`);
    console.log(`   GET    http://localhost:${PORT}/user/123`);
    console.log(`   GET    http://localhost:${PORT}/user/2025/11/10`);
    console.log(`   POST   http://localhost:${PORT}/api/page`);
    console.log(`   GET    http://localhost:${PORT}/api/user`);
    console.log(`   POST   http://localhost:${PORT}/api/user`);
    console.log(`   PUT    http://localhost:${PORT}/api/user/123`);
    console.log(`   DELETE http://localhost:${PORT}/api/user/123`);
    console.log(`   GET    http://localhost:${PORT}/api/headers`);
    console.log(`   GET    http://localhost:${PORT}/api/created`);
    console.log(`   GET    http://localhost:${PORT}/api/api/old-page`);
    console.log(`   GET    http://localhost:${PORT}/api/download`);
    console.log(`   GET    http://localhost:${PORT}/api/custom-headers`);
    console.log(`   ERROR  http://localhost:${PORT}/api/error`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
})