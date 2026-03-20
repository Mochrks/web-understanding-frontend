export interface BeTheoryTopic {
  id: string;
  category: 'Hard Skill' | 'OOP' | 'Database' | 'API & Security' | 'System Architecture' | 'Infrastructure';
  title: string;
  description: string;
  fullTheory: string;
  codeSnippet: string;
}

export const beTheoryData: BeTheoryTopic[] = [
  // PART 1: HARD SKILL & LOGIC (1-15)
  {
    id: 'BE-001',
    category: 'Hard Skill',
    title: 'Variables & Data Types',
    description: 'Pondasi penyimpanan data di memori.',
    fullTheory: 'Variable adalah kontainer untuk menyimpan nilai data. Dalam backend, pemilihan tipe data yang tepat (Integer, Float, String, Boolean) sangat krusial untuk manajemen memori dan akurasi perhitungan, terutama pada sistem finansial.',
    codeSnippet: '// Java\nint age = 25;\nString name = "Mochrks";\ndouble balance = 1500.50;\nboolean isActive = true;'
  },
  {
    id: 'BE-002',
    category: 'Hard Skill',
    title: 'Conditional Statements',
    description: 'Logika pengambilan keputusan (If-Else, Switch).',
    fullTheory: 'Alur program backend ditentukan oleh pengkondisian. Kita menggunakan If-Else untuk logika bercabang dan Switch-Case untuk menangani banyak opsi nilai yang berbasis pada satu variabel.',
    codeSnippet: 'if (userRole.equals("ADMIN")) {\n    grantAccess();\n} else {\n    restrictAccess();\n}'
  },
  {
    id: 'BE-003',
    category: 'Hard Skill',
    title: 'Iterations (Looping)',
    description: 'Eksekusi blok kode berulang kali.',
    fullTheory: 'Looping (For, While, Do-While) digunakan untuk memproses koleksi data, seperti membaca hasil query database atau mengirim batch email ke ribuan user secara efisien.',
    codeSnippet: 'for (int i = 0; i < products.size(); i++) {\n    System.out.println(products.get(i).getName());\n}'
  },
  {
    id: 'BE-004',
    category: 'Hard Skill',
    title: 'Data Structure: Array & List',
    description: 'Penyimpanan data linear.',
    fullTheory: 'Array memiliki ukuran tetap, sedangkan List (seperti ArrayList di Java) lebih dinamis. Ini adalah struktur data paling dasar untuk menyimpan sekumpulan entitas sebelum diproses lebih lanjut.',
    codeSnippet: 'List<String> logs = new ArrayList<>();\nlogs.add("Request received");'
  },
  {
    id: 'BE-005',
    category: 'Hard Skill',
    title: 'Data Structure: Stack & Queue',
    description: 'Logika LIFO dan FIFO dalam pengelolaan data.',
    fullTheory: 'Stack (Last-In-First-Out) digunakan untuk fungsi undo/redo atau algoritma DFS. Queue (First-In-First-Out) sangat penting dalam Message Queueing untuk memproses antrian tugas secara berurutan.',
    codeSnippet: 'Queue<String> tasks = new LinkedList<>();\ntasks.add("Send Email");\ntasks.poll(); // Ambil tugas pertama'
  },
  {
    id: 'BE-006',
    category: 'Hard Skill',
    title: 'Data Structure: Tree & Graph',
    description: 'Struktur data non-linear untuk hierarki dan relasi.',
    fullTheory: 'Tree digunakan untuk struktur organisasi atau DOM. Graph digunakan untuk relasi kompleks seperti pertemanan di media sosial atau rute terdekat pada peta.',
    codeSnippet: '// Representasi Graph sederhana\nMap<String, List<String>> adjList = new HashMap<>();'
  },
  {
    id: 'BE-007',
    category: 'Hard Skill',
    title: 'Hash & Set',
    description: 'Pencarian instan dan data unik.',
    fullTheory: 'Hash (HashMap) memungkinkan pencarian data dengan waktu O(1). Set digunakan untuk memastikan tidak ada data duplikat dalam sebuah koleksi.',
    codeSnippet: 'Set<String> uniqueEmails = new HashSet<>();\nuniqueEmails.add("test@mail.com");'
  },
  {
    id: 'BE-008',
    category: 'Hard Skill',
    title: 'Functions & Methods',
    description: 'Blok kode modular yang dapat dipanggil kembali.',
    fullTheory: 'Fungsi membantu membagi kode menjadi bagian kecil yang dapat dipanggil berulang kali (reusable). Backend yang baik memiliki fungsi yang spesifik (Single Responsibility).',
    codeSnippet: 'public int calculateTax(int income) {\n    return income * 10 / 100;\n}'
  },
  {
    id: 'BE-009',
    category: 'Hard Skill',
    title: 'Problem Solving: Understand & Plan',
    description: 'Tahapan awal memecahkan masalah kompleks.',
    fullTheory: 'Sebelum menulis kode, pahami input, output, dan batasannya. Buat rencana solusi (algoritma) agar implementasi tidak berantakan di tengah jalan.',
    codeSnippet: '// Step: Input -> Logic -> Output\n// 1. Get User ID\n// 2. Fetch from DB\n// 3. Update Status\n// 4. Return Success'
  },
  {
    id: 'BE-010',
    category: 'Hard Skill',
    title: 'Pseudocode & Algorithm Design',
    description: 'Menulis logika tanpa terikat sintaks bahasa tertentu.',
    fullTheory: 'Pseudocode membantu tim memahami logika bisnis sebelum diterjemahkan ke bahasa pemrograman. Algoritma yang efisien akan menghemat waktu eksekusi CPU.',
    codeSnippet: '// IF user balance > item price THEN\n//   SUBTRACT price FROM balance\n// ELSE\n//   RETURN "Insufficient Funds"'
  },
  {
    id: 'BE-011',
    category: 'Hard Skill',
    title: 'Git: Basics (Init, Clone, Status)',
    description: 'Memulai manajemen versi kode.',
    fullTheory: 'Git adalah tool wajib. Init memulai repo baru, Clone menyalin repo dari cloud (GitHub/GitLab), dan Status melihat perubahan file yang belum dicatat.',
    codeSnippet: 'git init\ngit clone https://repo-url.git\ngit status'
  },
  {
    id: 'BE-012',
    category: 'Hard Skill',
    title: 'Git: Branch & Merge',
    description: 'Bekerja secara paralel dalam tim.',
    fullTheory: 'Bekerja di Branch (cabang) memungkinkan kita menambah fitur tanpa merusak fitur di branch utama (Main/Master). Merge menggabungkan kembali cabang tersebut.',
    codeSnippet: 'git branch feature-login\ngit checkout feature-login\ngit merge main'
  },
  {
    id: 'BE-013',
    category: 'Hard Skill',
    title: 'Git: Stash & Revert',
    description: 'Menyimpan perubahan sementara dan membatalkan commit.',
    fullTheory: 'Stash digunakan untuk menyimpan perubahan yang belum selesai agar bisa pindah branch. Revert digunakan untuk membatalkan commit tertentu dengan membuat commit baru.',
    codeSnippet: 'git stash push\ngit revert d5a1e2f'
  },
  {
    id: 'BE-014',
    category: 'Hard Skill',
    title: 'Formatting: DateTime & Currency',
    description: 'Standarisasi tampilan data pada sistem.',
    fullTheory: 'Backend harus mengelola zona waktu (UTC) dan format mata uang agar data konsisten saat dikonsumsi oleh berbagai platform (Web, Android, iOS).',
    codeSnippet: '// Java LocalDateTime\nLocalDateTime now = LocalDateTime.now();\nString fmt = now.format(DateTimeFormatter.ISO_DATE_TIME);'
  },
  {
    id: 'BE-015',
    category: 'Hard Skill',
    title: 'HTTP Status Codes',
    description: 'Bahasa komunikasi antara server dan klien.',
    fullTheory: 'Server memberitahu klien hasil request lewat angka: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Internal Error).',
    codeSnippet: '// Spring Boot Response\nreturn ResponseEntity.status(404).body("Resource not found");'
  },

  // PART 2: OOP (OBJECT ORIENTED PROGRAMMING) (16-30)
  {
    id: 'BE-016',
    category: 'OOP',
    title: 'Class vs Object',
    description: 'Cetak biru vs Realitas data.',
    fullTheory: 'Class adalah desain/skema (misal: Mobil), sedangkan Object adalah unit nyata yang dibuat dari skema tersebut (misal: Honda Civic Anda).',
    codeSnippet: 'Car myCar = new Car(); // Object\nclass Car { String brand; } // Class'
  },
  {
    id: 'BE-017',
    category: 'OOP',
    title: 'Encapsulation',
    description: 'Menyembunyikan detail internal sebuah objek.',
    fullTheory: 'Data dilindungi menggunakan akses modifier `private`. Akses dilakukan melalui Getter dan Setter untuk menjaga integritas data.',
    codeSnippet: 'private String password;\npublic String getEmail() { return email; }'
  },
  {
    id: 'BE-018',
    category: 'OOP',
    title: 'Inhertiance (Pewarisan)',
    description: 'Mewariskan sifat dari Parent ke Child.',
    fullTheory: 'Objek baru bisa mewarisi atribut dan perilaku dari objek lama tanpa menulis ulang kode. Menggunakan kata kunci `extends`.',
    codeSnippet: 'class Employee {} \nclass Manager extends Employee {}'
  },
  {
    id: 'BE-019',
    category: 'OOP',
    title: 'Polymorphism',
    description: 'Satu aksi memiliki banyak bentuk.',
    fullTheory: 'Metode yang sama bisa berperilaku berbeda tergantung tipe objeknya. Terbagi menjadi Method Overloading (nama sama, parameter beda) dan Overriding (mengganti isi fungsi parent).',
    codeSnippet: '@Override\npublic void processPayment() { /* khusus Credit Card */ }'
  },
  {
    id: 'BE-020',
    category: 'OOP',
    title: 'Abstraction',
    description: 'Fokus pada "apa" bukan "bagaimana".',
    fullTheory: 'Menggunakan `abstract class` atau `interface` untuk mendefinisikan standar tanpa implementasi detail. Menghilangkan kompleksitas bagi pengguna objek.',
    codeSnippet: 'abstract class Payment { abstract void pay(); }'
  },
  {
    id: 'BE-021',
    category: 'OOP',
    title: 'Interface',
    description: 'Kontrak perilaku sistem.',
    fullTheory: 'Interface mewajibkan sebuah class untuk memiliki fungsi tertentu. Sangat berguna untuk decoupling atau decoupling antar modul.',
    codeSnippet: 'interface Logger { void log(String msg); }'
  },
  {
    id: 'BE-022',
    category: 'OOP',
    title: 'Composition vs Inheritance',
    description: 'Hubungan "Memiliki" vs "Adalah".',
    fullTheory: 'Komposisi lebih disukai (Favor composition over inheritance) karena lebih fleksibel. Objek menyimpan referensi objek lain (Has-A relationship).',
    codeSnippet: 'class Engine {}\nclass Car { Engine engine; } // Composition'
  },
  {
    id: 'BE-023',
    category: 'OOP',
    title: 'Object References in Memory',
    description: 'Bagaimana variabel menunjuk ke data di Heap.',
    fullTheory: 'Di backend, variabel objek hanya menyimpan alamat memori (referensi). Jika satu referensi diubah, objek aslinya pun terpengaruh.',
    codeSnippet: 'User b = a; \nb.setName("Changed"); // a.getName() juga "Changed"'
  },
  {
    id: 'BE-024',
    category: 'OOP',
    title: 'Design Pattern: Singleton',
    description: 'Menjamin hanya ada satu instansi objek.',
    fullTheory: 'Penting untuk resource bersama seperti Database Connection atau Configuration agar tidak memboroskan memori.',
    codeSnippet: 'public static Database getInstance() {\n    if (instance == null) instance = new Database();\n    return instance;\n}'
  },
  {
    id: 'BE-025',
    category: 'OOP',
    title: 'Design Pattern: Factory',
    description: 'Membuat objek tanpa mengekspos logika instansiasi.',
    fullTheory: 'Klien hanya meminta objek, Factory menentukan class mana yang diproses. Cocok untuk sistem notifikasi (Email, SMS, WhatsApp).',
    codeSnippet: 'Notification n = Factory.create("SMS");'
  },
  {
    id: 'BE-026',
    category: 'OOP',
    title: 'SOLID: Single Responsibility (S)',
    description: 'Satu class hanya punya satu alasan untuk berubah.',
    fullTheory: 'Class jangan "serakah". Jangan menaruh logika validasi, database, dan email di satu tempat. Pisahkan sesuai fungsinya.',
    codeSnippet: '// Bad: class User { saveDB(); sendEmail(); validate(); }'
  },
  {
    id: 'BE-027',
    category: 'OOP',
    title: 'SOLID: Open/Closed (O)',
    description: 'Terbuka untuk ekstensi, tertutup untuk modifikasi.',
    fullTheory: 'Jika ingin menambah fitur baru, jangan ubah kode lama yang sudah stabil. Gunakan interface atau polymorphism.',
    codeSnippet: '// Tambah payment method baru tanpa ubah logic utama.'
  },
  {
    id: 'BE-028',
    category: 'OOP',
    title: 'SOLID: Liskov Substitution (L)',
    description: 'Sub-class harus bisa menggantikan parent-nya.',
    fullTheory: 'Jangan merusak kontrak logika Parent. Jika Parent punya fungsi `fly()`, Child tidak boleh melempar error `NotSupportedException` di fungsi tersebut.',
    codeSnippet: 'Bird p = new Penguin();\np.fly(); // Jika ini error, berarti langgar Liskov.'
  },
  {
    id: 'BE-029',
    category: 'OOP',
    title: 'SOLID: Interface Segregation (I)',
    description: 'Jangan dipaksa bergantung pada interface yang tak digunakan.',
    fullTheory: 'Lebih baik banyak interface kecil (spesifik) daripada satu interface raksasa yang berisi ribuan metode kosong.',
    codeSnippet: 'interface Printer { print(); }\ninterface Scanner { scan(); }'
  },
  {
    id: 'BE-030',
    category: 'OOP',
    title: 'SOLID: Dependency Inversion (D)',
    description: 'Bergantung pada abstraksi, bukan implementasi konkret.',
    fullTheory: 'High-level module jangan bergantung pada Low-level module. Keduanya harus bergantung pada Interface. Kunci utama dari arsitektur yang mudah diuji.',
    codeSnippet: 'class Order { Payment p; } // Payment adalah interface'
  },

  // PART 3: DATABASE & ORM (31-45)
  {
    id: 'BE-031',
    category: 'Database',
    title: 'Relational Database (RDBMS)',
    description: 'Penyimpanan terstruktur dalam tabel.',
    fullTheory: 'RDBMS (MySQL, PostgreSQL) fokus pada integritas data melalui tabel yang memiliki baris (record) dan kolom (field).',
    codeSnippet: 'CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));'
  },
  {
    id: 'BE-032',
    category: 'Database',
    title: 'Database Relations (One-Many-Many)',
    description: 'Menghubungkan antar data.',
    fullTheory: 'One-to-One (User & Profile), One-to-Many (User & Posts), Many-to-Many (Student & Courses). Many-to-known diimplementasikan via tabel perantara (Pivot Table).',
    codeSnippet: 'SELECT * FROM posts WHERE user_id = 1;'
  },
  {
    id: 'BE-033',
    category: 'Database',
    title: 'Transactions (ACID)',
    description: 'Atomic, Consistent, Isolated, Durable.',
    fullTheory: 'Transaksi menjalin sekumpulan operasi menjadi satu kesatuan. Jika satu gagal, semua harus batal (Rollback). Sangat krtikal untuk transfer uang.',
    codeSnippet: 'BEGIN TRANSACTION;\n-- update credit\n-- update debit\nCOMMIT;'
  },
  {
    id: 'BE-034',
    category: 'Database',
    title: 'Indexing & Optimization',
    description: 'Mempercepat pencarian data besar.',
    fullTheory: 'Index bekerja seperti daftar isi di buku. Tanpa index, database harus melakukan Full Table Scan (lambat). Namun, terlalu banyak index memperlambat proses Insert.',
    codeSnippet: 'CREATE INDEX idx_email ON users(email);'
  },
  {
    id: 'BE-035',
    category: 'Database',
    title: 'Schema Generation',
    description: 'Auto-create database dari kode (Code First).',
    fullTheory: 'Gunakan tool ORM untuk membuat tabel otomatis berdasarkan Class Entity yang kita buat. Mengurangi sinkronisasi manual antara kode dan database.',
    codeSnippet: '// Hibernate: update, create, validate\nspring.jpa.hibernate.ddl-auto=update'
  },
  {
    id: 'BE-036',
    category: 'Database',
    title: 'ORM (Object Relational Mapping)',
    description: 'Jembatan antara Object dan RDBMS.',
    fullTheory: 'ORM (Hibernate @ Java, Entity Framework @ .NET) memungkinkan kita berinteraksi dengan DB menggunakan objek class tanpa menulis SQL mentah.',
    codeSnippet: '@Entity\nclass User { @Id int id; String name; }'
  },
  {
    id: 'BE-037',
    category: 'Database',
    title: 'Query Language (JPA/QueryDSL)',
    description: 'Mencari data dengan logika objek.',
    fullTheory: 'Penggunaan JPQL atau QueryDSL memungkinkan kita query database secara aman (type-safe) dan portabel di berbagai vendor database.',
    codeSnippet: 'userRepo.findByEmail("test@email.com");'
  },
  {
    id: 'BE-038',
    category: 'Database',
    title: 'Transaction Management',
    description: 'Menangani rollback otomatis saat error.',
    fullTheory: 'Di framework modern, kita cukup menggunakan anotasi `@Transactional` untuk menjamin integritas data dalam cakupan sebuah fungsi.',
    codeSnippet: '@Transactional\npublic void checkout() { /* logic */ }'
  },
  {
    id: 'BE-039',
    category: 'Database',
    title: 'Search: Elastic Search',
    description: 'Full-text search engine kelas dunia.',
    fullTheory: 'Digunakan jika database SQL sudah tidak kuat menangani pencarian kompleks, typo-tolerant, atau filtering berjuta data secara real-time.',
    codeSnippet: 'GET /index/_search { "query": { "match_all": {} } }'
  },
  {
    id: 'BE-040',
    category: 'Database',
    title: 'Database Provider & Pooling',
    description: 'Mengelola efisiensi koneksi.',
    fullTheory: 'Membuka koneksi ke database itu mahal. Connection Pooling (seperti HikariCP) menjaga sekumpulan koneksi tetap terbuka dan siap pakai.',
    codeSnippet: 'spring.datasource.hikari.maximum-pool-size=10'
  },

  // PART 4: API & SECURITY (46-75)
  {
    id: 'BE-041',
    category: 'API & Security',
    title: 'REST API Fundamentals',
    description: 'Standar komunikasi hightly-scalable.',
    fullTheory: 'REST menggunakan metode HTTP (GET, POST, PUT, DELETE) dan bersifat stateless. Data biasanya ditukarkan dalam format JSON.',
    codeSnippet: 'GET /api/v1/users/123'
  },
  {
    id: 'BE-042',
    category: 'API & Security',
    title: 'HATEOAS',
    description: 'Self-discovered API links.',
    fullTheory: 'API yang menyediakan link navigasi ke resource terkait di dalam responnya, memudahkan client mengeksplorasi API tanpa baca dokumentasi manual.',
    codeSnippet: '"_links": { "self": "/users/1", "posts": "/users/1/posts" }'
  },
  {
    id: 'BE-043',
    category: 'API & Security',
    title: 'Data Validation (Basic & Body)',
    description: 'Memastikan integritas input.',
    fullTheory: 'Selalu validasi data di sisi server. Gunakan library seperti Bean Validation (Hibernate Validator) untuk memastikan email valid, angka bukan minus, dll.',
    codeSnippet: '@Email\n@NotNull\nprivate String email;'
  },
  {
    id: 'BE-044',
    category: 'API & Security',
    title: 'API Versioning',
    description: 'Menjaga kompatibilitas dengan client lama.',
    fullTheory: 'Jangan merusak client yang sudah ada saat update fitur. Gunakan Header, Parameter, atau URI untuk membedakan versi API (v1, v2).',
    codeSnippet: '/api/v1/products vs /api/v2/products'
  },
  {
    id: 'BE-045',
    category: 'API & Security',
    title: 'Authentication vs Authorization',
    description: 'Siapa Anda vs Apa yang boleh Anda lakukan.',
    fullTheory: 'Autentikasi (AuthN) memeriksa identitas user (Login). Otorisasi (AuthZ) memeriksa hak akses user (Role: Admin vs Guest).',
    codeSnippet: '// AuthN: Login Success\n// AuthZ: Permission Denied'
  },
  {
    id: 'BE-046',
    category: 'API & Security',
    title: 'JWT (JSON Web Token)',
    description: 'Token berbasis klaim untuk stateless auth.',
    fullTheory: 'Token berisi payload terenkripsi yang dibawa client di setiap request. Server tidak perlu menyimpan session di database atau memori.',
    codeSnippet: 'Authorization: Bearer <token>'
  },
  {
    id: 'BE-047',
    category: 'API & Security',
    title: 'OAuth2 & OpenID Connect',
    description: 'Delegasi akses dan Identity Layer.',
    fullTheory: 'Memberikan izin aplikasi pihak ketiga mengakses data tanpa memberikan password asli kita (misal: Login with Google).',
    codeSnippet: '// Grant Type: Authorization Code'
  },
  {
    id: 'BE-048',
    category: 'API & Security',
    title: 'Cryptography: Hashing (Bcrypt)',
    description: 'Penyimpanan password yang aman.',
    fullTheory: 'Jangan pernah simpan password dalam bentuk teks murni (Plaintext). Gunakan algoritma Slow Hash seperti Bcrypt agar tahan terhadap Brute Force.',
    codeSnippet: 'String hash = BCrypt.hashpw(pass, BCrypt.gensalt());'
  },
  {
    id: 'BE-049',
    category: 'API & Security',
    title: 'Exception Handling (Try-Catch)',
    description: 'Menangani kegagalan sistem agar tidak crash.',
    fullTheory: 'Log error dengan baik di backend, tapi jangan kirim Stack Trace asli ke klien (risiko keamanan). Gunakan custom Error Response.',
    codeSnippet: 'try { ... } catch (Exception e) { log.error(e); }'
  },
  {
    id: 'BE-050',
    category: 'API & Security',
    title: 'TLS & HTTPS',
    description: 'Keamanan pada jalur komunikasi.',
    fullTheory: 'Mengenkripsi data saat transit antar klien dan server menggunakan sertifikat SSL/TLS agar tidak bisa diintip oleh Man-in-the-Middle (MitM).',
    codeSnippet: '// Server: port 443'
  },

  // PART 5: INFRASTRUCTURE & ADVANCED (76-100+)
  {
    id: 'BE-051',
    category: 'Infrastructure',
    title: 'Containerization: Docker',
    description: 'Isolasi aplikasi dalam paket kontainer.',
    fullTheory: 'Menghilangkan masalah "works on my machine". Aplikasi dibungkus beserta OS dan dependensinya sehingga berjalan konsisten di mana saja.',
    codeSnippet: 'FROM openjdk:17\nCOPY build/app.jar app.jar\nENTRYPOINT ["java","-jar","/app.jar"]'
  },
  {
    id: 'BE-052',
    category: 'Infrastructure',
    title: 'Caching: Redis',
    description: 'Memori super cepat untuk data yang sering diakses.',
    fullTheory: 'Membaca data dari RAM jauh lebih cepat daripada dari Disk/Database. Gunakan Redis untuk session, leaderboard, atau hasil query lambat.',
    codeSnippet: 'redisTemplate.opsForValue().get("user_session_1");'
  },
  {
    id: 'BE-053',
    category: 'Infrastructure',
    title: 'Message Queue (Kafka/RabbitMQ)',
    description: 'Komunikasi asynchronous antar layanan.',
    fullTheory: 'Memisahkan tugas berat (seperti kirim email atau generate laporan) agar tidak menghambat response time API utama.',
    codeSnippet: 'producer.send("order-topic", orderData);'
  },
  {
    id: 'BE-054',
    category: 'Infrastructure',
    title: 'Microservices Architecture',
    description: 'Membagi aplikasi besar menjadi layanan independen.',
    fullTheory: 'Setiap fitur (User, Order, Payment) memiliki database dan server masing-masing. Meningkatkan skalabilitas tim dan keandalan sistem.',
    codeSnippet: '// Order Service -> calls -> Payment Service'
  },
  {
    id: 'BE-055',
    category: 'Infrastructure',
    title: 'CI/CD Pipelines (GitHub Actions)',
    description: 'Otomatisasi build dan deployment.',
    fullTheory: 'Setiap kali kode di-push, sistem otomatis menjalankan test, membungkus aplikasi, dan mengunggahnya ke server/cloud tanpa campur tangan manusia.',
    codeSnippet: 'on: [push]\njobs: build-and-deploy'
  },
  {
    id: 'BE-056',
    category: 'Infrastructure',
    title: 'WebSockets',
    description: 'Komunikasi dua arah real-time.',
    fullTheory: 'Berbeda dengan REST yang searah, WebSocket membiarkan server mengirim data ke klien kapan saja tanpa diminta (misal: Chat, Notifikasi Realtime).',
    codeSnippet: 'socket.emit("chat message", msg);'
  },
  {
    id: 'BE-057',
    category: 'Infrastructure',
    title: 'Thread Pooling & Management',
    description: 'Efisiensi pengelolaan thread CPU.',
    fullTheory: 'Aplikasi backend melayani ribuan user dengan thread. Thread Pool membatasi jumlah thread aktif agar server tidak kehabisan resource memori.',
    codeSnippet: 'ExecutorService pool = Executors.newFixedThreadPool(10);'
  },
  {
    id: 'BE-058',
    category: 'Infrastructure',
    title: 'Asynchronous Programming (Async/Await)',
    description: 'Non-blocking I/O untuk performa tinggi.',
    fullTheory: 'Memungkinkan server memproses request lain sambil menunggu proses I/O (seperti Database atau API external) selesai.',
    codeSnippet: 'async Task<User> GetUserAsync(int id) { ... }'
  },
  {
    id: 'BE-059',
    category: 'Infrastructure',
    title: 'Load Balancing',
    description: 'Distribusi beban kerja ke banyak server.',
    fullTheory: 'Menggunakan Nginx atau Cloud Load Balancer untuk memastikan tidak ada satu server pun yang kewalahan menangani traffic tinggi.',
    codeSnippet: 'upstream myapp { list server1; server2; }'
  },
  {
    id: 'BE-060',
    category: 'Infrastructure',
    title: 'Scalability: Vertical vs Horizontal',
    description: 'Cara membesarkan kapasitas sistem.',
    fullTheory: 'Vertical = memperkuat satu server (tambah RAM/CPU). Horizontal = menambah jumlah server (paling efektif untuk cloud).',
    codeSnippet: '// Horizontal: Spin up 10 new Docker instances.'
  },
  {
    id: 'BE-061',
    category: 'API & Security',
    title: 'API Rate Limiting',
    description: 'Mencegah penyalahgunaan API.',
    fullTheory: 'Membatasi jumlah request per detik per user untuk menjaga stabilitas server dari serangan DDoS atau bot.',
    codeSnippet: 'rate: 100 requests / minute'
  },
  {
    id: 'BE-062',
    category: 'API & Security',
    title: 'CORS (Cross-Origin Resource Sharing)',
    description: 'Keamanan akses lintas domain.',
    fullTheory: 'Mekanisme browser yang membatasi script dari satu origin mengakses resource di origin lain atas alasan keamanan.',
    codeSnippet: 'Access-Control-Allow-Origin: *'
  },
  {
    id: 'BE-063',
    category: 'Infrastructure',
    title: 'Monitoring & Metrics (Prometheus)',
    description: 'Melihat kondisi kesehatan server.',
    fullTheory: 'Memonitor penggunaan CPU, RAM, jumlah error, dan latensi secara real-time untuk mendeteksi masalah sebelum user menyadarinya.',
    codeSnippet: 'metrics: http_requests_total'
  },
  {
    id: 'BE-064',
    category: 'Infrastructure',
    title: 'Logging (ELK Stack)',
    description: 'Pusat rekaman aktivitas sistem.',
    fullTheory: 'Kumpulkan semua log aplikasi di satu tempat (Elasticsearch, Logstash, Kibana) untuk memudahkan debugging di sistem terdistribusi.',
    codeSnippet: 'logger.info("Order processed id={}", orderId);'
  },
  {
    id: 'BE-065',
    category: 'Infrastructure',
    title: 'Cloud Computing (AWS/S3)',
    description: 'Infrastruktur di awan.',
    fullTheory: 'Memanfaatkan layanan siap pakai seperti S3 untuk penyimpanan file, RDS untuk database managed, dan EC2 untuk server virtual.',
    codeSnippet: 's3Client.putObject("my-bucket", file);'
  },
  {
    id: 'BE-066',
    category: 'Hard Skill',
    title: 'Clean Code: Readability',
    description: 'Menulis kode untuk manusia, bukan mesin.',
    fullTheory: 'Gunakan nama variabel yang deskriptif. Kode yang bersih lebih mudah diperbaiki dan dikembangkan oleh anggota tim lain.',
    codeSnippet: 'int daysUntilExpired = 5; // Good\nint d = 5; // Bad'
  },
  {
    id: 'BE-067',
    category: 'Hard Skill',
    title: 'Refactoring & Optimization',
    description: 'Memperbaiki struktur tanpa mengubah fungsi.',
    fullTheory: 'Secara berkala meninjau kode lama untuk menghilangkan redundansi dan meningkatkan efisiensi tanpa merusak fitur asli.',
    codeSnippet: '// Simplify complex if-else to guard clauses'
  },
  {
    id: 'BE-068',
    category: 'Infrastructure',
    title: 'Object Storage (MinIO)',
    description: 'Penyimpanan file skala besar yang kompatibel S3.',
    fullTheory: 'Object storage menangani file besar lebih baik dari database. MinIO adalah versi open-source yang bisa diinstal di server sendiri.',
    codeSnippet: 'minioClient.uploadFile(bucket, objectName, file);'
  },
  {
    id: 'BE-069',
    category: 'Infrastructure',
    title: 'Dependency Injection (DI)',
    description: 'Menyuntikkan ketergantungan antar objek.',
    fullTheory: 'Membantu decoupling kode. Objek tidak membuat ketergantungannya sendiri (New), tapi "menerimanya" lewat konstruktor (Injected).',
    codeSnippet: '@Autowired\nprivate UserService userService;'
  },
  {
    id: 'BE-070',
    category: 'Infrastructure',
    title: 'Testing: Unit Testing (JUnit)',
    description: 'Menguji bagian terkecil program secara otomatis.',
    fullTheory: 'Memastikan fungsi-fungsi kecil berjalan sesuai ekspektasi. Kunci dari sistem yang stabil saat dikembangkan terus menerus.',
    codeSnippet: '@Test\nvoid testSum() { assertEquals(4, calc.add(2,2)); }'
  },
  // Tambahan hingga 100 dengan variasi detail lainnya...
  {
    id: 'BE-071',
    category: 'System Architecture',
    title: 'Audit Trail',
    description: 'Mencatat sejarah perubahan data.',
    fullTheory: 'Penting di sistem perbankan untuk melihat siapa yang mengubah data, kapan, dan apa nilai sebelumnya.',
    codeSnippet: 'Log: User 1 changed Price from 100 to 120 at 10:00'
  },
  {
    id: 'BE-072',
    category: 'API & Security',
    title: 'Soft Delete vs Hard Delete',
    description: 'Logika penghapusan data.',
    fullTheory: 'Soft delete (is_deleted=true) lebih aman untuk audit dan pemulihan data. Hard delete menghapus data selamanya dari disk.',
    codeSnippet: 'UPDATE users SET deleted_at = NOW() WHERE id = 1;'
  },
  {
    id: 'BE-073',
    category: 'System Architecture',
    title: 'Document Processing: JasperReports',
    description: 'Generating PDF/Laporan kompleks.',
    fullTheory: 'Library standar industri untuk membuat laporan cetak, invoice, dan rekap data dalam format PDF, Excel, atau Word secara dinamis dari database.',
    codeSnippet: 'JasperPrint jp = JasperFillManager.fillReport(report, params, connection);'
  },
  {
    id: 'BE-074',
    category: 'System Architecture',
    title: 'Message Broker: RabbitMQ',
    description: 'Antrian pesan antar layanan.',
    fullTheory: 'Efisien untuk skenario penanganan lonjakan trafik tinggi dengan meratakan beban kerja (Load Leveling) melalui antrian.',
    codeSnippet: 'channel.basicPublish(exchange, routingKey, msg);'
  },
  {
    id: 'BE-075',
    category: 'Infrastructure',
    title: 'API Documentation: Swagger/OpenAPI',
    description: 'Dokumentasi interaktif untuk developer.',
    fullTheory: 'Backend secara otomatis menghasilkan halaman web bagi developer frontend untuk mencoba setiap endpoint API secara langsung.',
    codeSnippet: '@ApiOperation("Get user by ID")'
  },
  {
    id: 'BE-076',
    category: 'Infrastructure',
    title: 'CI/CD: Deployment Strategies',
    description: 'Cara merilis kode baru dengan aman.',
    fullTheory: 'Blue-Green Deployment (dua server paralel) atau Canary Release (rilis ke 5% user dulu) untuk meminimalisir risiko kegagalan sistem.',
    codeSnippet: '// Switch traffic from Blue to Green.'
  },
  {
    id: 'BE-077',
    category: 'System Architecture',
    title: 'Service Discovery',
    description: 'Bagaimana Microservices saling menemukan.',
    fullTheory: 'Pada Microservices, alamat IP server berubah-ubah. Service Discovery (seperti Eureka atau Consul) bertindak sebagai buku telepon antar layanan.',
    codeSnippet: '@EnableDiscoveryClient'
  },
  {
    id: 'BE-078',
    category: 'API & Security',
    title: 'Content Security Policy (CSP)',
    description: 'Mencegah serangan injeksi script.',
    fullTheory: 'Header keamanan yang memberitahu browser sumber file JS/CSS mana saja yang valid dan boleh dijalankan.',
    codeSnippet: 'Content-Security-Policy: default-src \'self\''
  },
  {
    id: 'BE-079',
    category: 'Infrastructure',
    title: 'Server-Side Rendering (SSR) in BE',
    description: 'Membangun HTML di sisi server.',
    fullTheory: 'Framework seperti Thymeleaf, Blade, atau EJS memproses template HTML di backend sebelum dikirim ke user untuk SEO yang lebih baik.',
    codeSnippet: 'return "user-profile"; // name of HTML file'
  },
  {
    id: 'BE-080',
    category: 'System Architecture',
    title: 'Idempotency in APIs',
    description: 'Request berulang memberikan hasil yang sama.',
    fullTheory: 'Sangat penting untuk API pembayaran. Jika user klik bayar dua kali, server harus menjamin hanya ada satu transaksi yang tercatat.',
    codeSnippet: 'X-Idempotency-Key: uuid-12345'
  },
  {
    id: 'BE-081',
    category: 'Hard Skill',
    title: 'Exception Handling: Custom Exceptions',
    description: 'Menciptakan klasifikasi error sendiri.',
    fullTheory: 'Daripada melempar kegagalan umum, buat class seperti `UserNotFoundException` agar penanganan di level atas lebih spesifik.',
    codeSnippet: 'throw new ResourceNotFoundException("Product 1 not found");'
  },
  {
    id: 'BE-082',
    category: 'Infrastructure',
    title: 'Health Checks',
    description: 'Status kesehatan layanan.',
    fullTheory: 'Endpoint khusus `/health` yang digunakan alat monitoring untuk mengecek apakah server masih hidup dan koneksi database lancar.',
    codeSnippet: 'GET /actuator/health'
  },
  {
    id: 'BE-083',
    category: 'Database',
    title: 'Distributed Database',
    description: 'Data yang tersebar di banyak lokasi.',
    fullTheory: 'Database besar menggunakan Sharding atau Replication untuk menangani jutaan transaksi per detik di seluruh dunia.',
    codeSnippet: '// Master-Slave Replication'
  },
  {
    id: 'BE-084',
    category: 'Hard Skill',
    title: 'Data Validation: GET vs POST',
    description: 'Validasi input dari berbagai tipe request.',
    fullTheory: 'Input dari URL (Query Param) dan input dari Body (JSON) memerlukan teknik validasi yang berbeda di layer controller.',
    codeSnippet: '@RequestParam vs @RequestBody'
  },
  {
    id: 'BE-085',
    category: 'System Architecture',
    title: 'Single Sign-On (SSO)',
    description: 'Satu akun untuk banyak aplikasi.',
    fullTheory: 'Meningkatkan kenyamanan pengguna dengan login satu kali saja untuk mengakses berbagai layanan internal perusahaan.',
    codeSnippet: '// Logic with Keycloak or Okta.'
  },
  {
    id: 'BE-086',
    category: 'Infrastructure',
    title: 'SMTP & Email Service',
    description: 'Infrastruktur pengiriman surat elektronik.',
    fullTheory: 'Memahami cara kerja port 587 (TLS) atau 465 (SSL) dan penggunaan provider seperti SendGrid atau AWS SES agar email tidak masuk spam.',
    codeSnippet: 'mailSender.send(message);'
  },
  {
    id: 'BE-087',
    category: 'Infrastructure',
    title: 'Transactional vs Bulk Email',
    description: 'Misi kritis vs Kampanye massal.',
    fullTheory: 'Transactional (Reset Password) harus instan. Bulk (Newsletter) dikirim pelan-pelan agar tidak membebani performa server email.',
    codeSnippet: '// Priority: Transactional > Bulk'
  },
  {
    id: 'BE-088',
    category: 'System Architecture',
    title: 'Scheduler (Cron Jobs)',
    description: 'Menjalankan tugas pada jadwal tetap.',
    fullTheory: 'Digunakan untuk kalkulasi denda harian, pembersihan log lama, atau sinkronisasi data antar sistem setiap tengah malam.',
    codeSnippet: '@Scheduled(cron = "0 0 0 * * *")'
  },
  {
    id: 'BE-089',
    category: 'System Architecture',
    title: 'Event-Driven Scheduling',
    description: 'Tugas otomatis berdasarkan kejadian.',
    fullTheory: 'Menjalankan proses bukan karena waktu, tapi karena sebuah aksi (misal: jalankan pengecekan stok setelah order masuk).',
    codeSnippet: 'eventPublisher.publishEvent(new OrderEvent(o));'
  },
  {
    id: 'BE-090',
    category: 'System Architecture',
    title: 'File Upload Scalability',
    description: 'Menangani file besar tanpa timeout.',
    fullTheory: 'Pentingnya menggunakan Multipart Upload dan teknik Chunking untuk memecah file besar menjadi bagian kecil saat dikirim ke server.',
    codeSnippet: 'MultipartFile file = request.getFile("file");'
  },
  {
    id: 'BE-091',
    category: 'API & Security',
    title: 'SQL Injection Prevention',
    description: 'Melindungi database dari manipulasi query.',
    fullTheory: 'Gunakan Prepared Statements atau ORM. Jangan pernah menyatukan input user langsung ke dalam string SQL.',
    codeSnippet: 'SELECT * FROM users WHERE id = ?; // Safe'
  },
  {
    id: 'BE-092',
    category: 'API & Security',
    title: 'CSRF Protection',
    description: 'Mencegah perintah palsu dari situs lain.',
    fullTheory: 'Cross-Site Request Forgery memaksa user mengirim request ke server melalui link jebakan. Dilindungi dengan CSRF Token.',
    codeSnippet: '_csrf_token: abc...123'
  },
  {
    id: 'BE-093',
    category: 'System Architecture',
    title: 'Document Processing: OpenXML/POI',
    description: 'Membangun file Excel dan Word dinamis.',
    fullTheory: 'Berguna untuk mengekspor ribuan data transaksi ke dalam file Excel yang bisa diolah oleh divisi keuangan.',
    codeSnippet: 'XSSFWorkbook workbook = new XSSFWorkbook();'
  },
  {
    id: 'BE-094',
    category: 'Hard Skill',
    title: 'Logging Levels',
    description: 'Membedakan urgensi pesan log.',
    fullTheory: 'TRACE, DEBUG (Developer), INFO (Normal), WARN (Potensi Masalah), ERROR (Kegagalan), FATAL (Kematian Sistem).',
    codeSnippet: 'log.info("System started.");'
  },
  {
    id: 'BE-095',
    category: 'Infrastructure',
    title: 'Server Monitoring (Grafana)',
    description: 'Visualisasi grafik metrik sistem.',
    fullTheory: 'Membuat dashboard cantik untuk memantau trafik tinggi secara visual agar tim operasional bisa bereaksi cepat saat ada anomali.',
    codeSnippet: '// Dashboard with live charts.'
  },
  {
    id: 'BE-096',
    category: 'System Architecture',
    title: 'API Rate Limiting: Algorithms',
    description: 'Teknik kuota request.',
    fullTheory: 'Token Bucket, Leaky Bucket, atau Fixed Window adalah algoritma populer untuk membatasi kuota akses user.',
    codeSnippet: '// Strategy: Window-based limiting.'
  },
  {
    id: 'BE-097',
    category: 'Infrastructure',
    title: 'Docker Compose',
    description: 'Menjalankan banyak kontainer sekaligus.',
    fullTheory: 'Menjalankan Web Server, Database, dan Redis hanya dengan satu perintah `docker-compose up`. Sangat membantu setup lokal.',
    codeSnippet: 'services: db, app, redis'
  },
  {
    id: 'BE-098',
    category: 'Infrastructure',
    title: 'Kubernetes (K8s) Basics',
    description: 'Orkestrasi kontainer skala massal.',
    fullTheory: 'Tool untuk mengelola ribuan kontainer Docker secara otomatis, menangani auto-scaling, dan self-healing jika ada kontainer yang mati.',
    codeSnippet: 'kubectl apply -f deployment.yaml'
  },
  {
    id: 'BE-099',
    category: 'Hard Skill',
    title: 'Programming Logic: Recursion',
    description: 'Fungsi yang memanggil dirinya sendiri.',
    fullTheory: 'Digunakan untuk memproses data hierarkis (folder, kategori bertingkat) atau algoritma divide and conquer.',
    codeSnippet: 'int fact(n) { return n == 1 ? 1 : n * fact(n-1); }'
  },
  {
    id: 'BE-100',
    category: 'System Architecture',
    title: 'Big Data Fundamentals',
    description: 'Misi pengolahan miliaran baris data.',
    fullTheory: 'Memahami ekosistem Hadoop, Spark, dan NoSQL (MongoDB/Cassandra) untuk menangani data yang volumenya tidak bisa ditangani database relasional biasa.',
    codeSnippet: '// End of 100 Mastery Hub'
  }
];
