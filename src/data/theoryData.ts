export interface TheoryTopic {
  id: string;
  title: string;
  category: 'Fundamental' | 'Core Engineering' | 'Advanced' | 'Architecture';
  description: string;
  fullTheory: string;
  codeSnippet: string;
}

export const theoryData: TheoryTopic[] = [
  // --- FUNDAMENTAL (1-25) ---
  {
    id: 'f1',
    category: 'Fundamental',
    title: 'Fundamental Web (HTML, CSS, JS)',
    description: 'Tiga pilar utama web: Struktur, Gaya, dan Logika.',
    fullTheory: 'Frontend development modern tetap berpijak pada 3 teknologi dasar: HTML (HyperText Markup Language) untuk mendefinisikan struktur dan konten; CSS (Cascading Style Sheets) untuk mengatur tampilan, layout, dan estetika; serta JavaScript untuk memberikan interaktivitas, pengolahan data, dan manipulasi DOM (Document Object Model) secara dinamis. Tanpa pemahaman mendalam pada ketiganya, framework seperti React atau Vue akan terasa sulit dikuasai.',
    codeSnippet: `<!-- Index.html -->
<div class="card">
  <h1>Halo Dunia</h1>
  <button id="btn">Klik Saya</button>
</div>

/* Style.css */
.card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

// Script.js
const btn = document.getElementById('btn');
btn.onclick = () => alert('JavaScript Berjalan!');`
  },
  {
    id: 'f2',
    category: 'Fundamental',
    title: 'HTTP & Web Communication',
    description: 'Protokol dasar pertukaran data antara Client dan Server.',
    fullTheory: 'Hypertext Transfer Protocol (HTTP) adalah fondasi komunikasi data di web. Sebagai developer, Anda harus memahami Request-Response cycle. Method utama: GET (Ambil data), POST (Kirim data baru), PUT (Update seluruh resource), PATCH (Update sebagian), dan DELETE (Hapus). Pahami juga Status Code: 2xx (Sukses), 4xx (Kesalahan Client), dan 5xx (Kesalahan Server).',
    codeSnippet: `// Contoh Request Fetch sederhana
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) throw new Error('Gagal memuat data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}`
  },
  {
    id: 'f3',
    category: 'Fundamental',
    title: 'Web Security Basics (XSS & CSRF)',
    description: 'Melindungi aplikasi dari serangan injeksi dan pemalsuan request.',
    fullTheory: 'XSS (Cross-Site Scripting) terjadi saat penyerang menyisipkan script berbahaya ke halaman Anda. Solusinya: Sanitasi input user. CSRF (Cross-Site Request Forgery) memanfaatkan sesi login user untuk melakukan aksi tanpa ijin. Solusinya: Gunakan CSRF Tokens dan SameSite Cookies (Strict/Lax).',
    codeSnippet: `// Menggunakan library DOMPurify untuk sanitasi HTML (Mencegah XSS)
import DOMPurify from 'dompurify';

const userInput = '<img src=x onerror=alert("Hacked!")>';
const cleanHTML = DOMPurify.sanitize(userInput);

// Output safe: <img src="x">`
  },
  {
    id: 'f4',
    category: 'Fundamental',
    title: 'Browser Storage Mastery',
    description: 'Kapan menggunakan LocalStorage, SessionStorage, atau Cookies.',
    fullTheory: 'LocalStorage: Data tetap ada meski browser ditutup (kapasitas ~5MB), cocok untuk setting tema. SessionStorage: Data hilang saat tab ditutup, cocok untuk form sementara. Cookies: Ukuran kecil (~4KB), dikirimkan di setiap HTTP request ke server, ideal untuk session token (gunakan HttpOnly & Secure untuk keamanan).',
    codeSnippet: `// Simpan data ke LocalStorage
localStorage.setItem('user_theme', 'dark');

// Ambil data
const theme = localStorage.getItem('user_theme');

// Hapus data
localStorage.removeItem('user_theme');`
  },
  {
    id: 'f5',
    category: 'Fundamental',
    title: 'CSS Box Model Deep Dive',
    description: 'Memahami ruang luar dan dalam elemen HTML.',
    fullTheory: 'Box Model terdiri dari Content (isi), Padding (jarak dalam), Border (garis tepi), dan Margin (jarak luar). Kesalahan umum adalah tidak menggunakan "box-sizing: border-box", yang menyebabkan padding menambah lebar total elemen dan merusak layout. Dengan border-box, padding dan border masuk ke dalam hitungan width/height.',
    codeSnippet: `/* Rekomendasi Reset Global */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total lebar tetap 300px jika border-box */
}`
  },
  {
    id: 'f6',
    category: 'Fundamental',
    title: 'CSS Specificity Rules',
    description: 'Siapa yang menang saat terjadi konflik gaya?',
    fullTheory: 'Specificity dihitung berdasarkan bobot selektor: Inline Style (1000) > ID (100) > Class/Pseudo-class (10) > Element (1). Selektor !important memiliki bobot tertinggi tapi harus dihindari jika tidak mendesak karena sulit di-override (timpa).',
    codeSnippet: `/* Bobot 1 (Element) */
p { color: black; }

/* Bobot 10 (Class) - Ini akan menang */
.text-red { color: red; }

/* Bobot 110 (ID + Class) - Ini pemenang mutlak */
#header .text-red { color: blue; }`
  },
  {
    id: 'f7',
    category: 'Fundamental',
    title: 'Flexbox Architecture Patterns',
    description: 'Layouting satu dimensi yang responsif dan fleksibel.',
    fullTheory: 'Flexbox dirancang untuk menyusun item dalam satu baris (row) atau kolom (column). Properti utama: justify-content (perataan horizontal), align-items (perataan vertikal), dan flex-wrap (pindah baris). Sangat kuat untuk komponen kecil seperti Navbar, Sidebar, atau Card List.',
    codeSnippet: `.navbar {
  display: flex;
  justify-content: space-between; /* Kiri dan Kanan Terpisah */
  align-items: center; /* Rata tengah vertikal */
  padding: 0 1rem;
}`
  },
  {
    id: 'f8',
    category: 'Fundamental',
    title: 'CSS Grid System Mastery',
    description: 'Membangun tata letak dua dimensi yang kompleks.',
    fullTheory: 'Berbeda dng Flexbox, Grid menangani struktur Baris dan Kolom secara bersamaan. Gunakan grid-template-columns untuk mendefinisikan kolom dan fr (fractional unit) untuk lebar fleksibel. Grid sangat ideal untuk makro-layout (struktur halaman utama).',
    codeSnippet: `.layout {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar & Content */
  grid-template-rows: auto 1fr auto; /* Header, Body, Footer */
  gap: 15px;
}`
  },
  {
    id: 'f9',
    category: 'Fundamental',
    title: 'Semantic HTML & Accessibility (a11y)',
    description: 'Membangun web yang terbaca mesin dan ramah disabilitas.',
    fullTheory: 'Gunakan tag bermakna: <article> untuk konten mandiri, <section> untuk kelompok konten, <nav> untuk link, dan <footer>. Tag semantik membantu SEO browser dan Screen Reader (untuk tunanetra) memahami konteks halaman tanpa melihat visual.',
    codeSnippet: `<main>
  <section id="konten-utama">
    <h1>Judul Berita</h1>
    <article>
       <p>Isi berita...</p>
    </article>
  </section>
</main>`
  },
  {
    id: 'f10',
    category: 'Fundamental',
    title: 'JavaScript Scopes & Closures',
    description: 'Memahami bagaimana variabel diakses dan disimpan di memori.',
    fullTheory: 'Global Scope, Function Scope, dan Block Scope (Let/Const) menentukan ketersediaan variabel. Closure adalah kondisi di mana sebuah fungsi dalam "mengingat" variabel di scope luarnya meski scope tersebut sudah selesai dieksekusi. Ini adalah dasar enkapsulasi data di JS.',
    codeSnippet: `function buatCounter() {
  let hitung = 0; // Terjebak dalam closure
  return () => hitung++;
}

const counter = buatCounter();
console.log(counter()); // 0
console.log(counter()); // 1`
  },
  {
    id: 'f11',
    category: 'Fundamental',
    title: 'JS Prototypal Inheritance Deep Dive',
    description: 'Mekanisme pewarisan unik ala JavaScript.',
    fullTheory: 'JavaScript adalah bahasa berbasis prototipe, bukan kelas (meski ada sintaks "class"). Setiap objek memiliki properti internal [[Prototype]]. Saat Anda memanggil metode, JS mencarinya di objek tersebut, jika tidak ada, ia naik ke prototipenya (Prototype Chain).',
    codeSnippet: `const hewan = { makan: true };
const kucing = Object.create(hewan);

console.log(kucing.makan); // true (warisan dari hewan)`
  },
  {
    id: 'f12',
    category: 'Fundamental',
    title: 'Advanced DOM Manipulation',
    description: 'Mengubah struktur, gaya, dan atribut elemen secara efisien.',
    fullTheory: 'Manipulasi DOM langsung via vanilla JS seringkali lebih cepat daripada framework. Gunakan querySelectorAll untuk memilih banyak elemen, addEventListener untuk interaksi, dan classList untuk mengganti style.',
    codeSnippet: `const list = document.querySelector('.my-list');
const newItem = document.createElement('li');
newItem.textContent = 'Barang Baru';
newItem.classList.add('active');

list.appendChild(newItem);`
  },
  {
    id: 'f13',
    category: 'Fundamental',
    title: 'Event Bubbling & Capturing Mechanics',
    description: 'Bagaimana event "mengalir" di pohon DOM.',
    fullTheory: 'Saat elemen diklik, event berjalan dari root ke target (Capturing/Trickling) lalu kembali dari target ke root (Bubbling). Mayoritas developer menggunakan Bubbling. Gunakan event delegation dng memasang listener di parent untuk menghemat memori.',
    codeSnippet: `// Event Delegation pada List Parent
document.getElementById('parent').onclick = (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Item diklik:', e.target.innerText);
  }
};`
  },
  {
    id: 'f14',
    category: 'Fundamental',
    title: 'Fetch API vs Axios: The Comparison',
    description: 'Memilih alat komunikasi data yang tepat untuk proyek Anda.',
    fullTheory: 'Fetch: Native (tak perlu install), tapi butuh penanganan manual untuk error 4xx/5xx dan konversi JSON (dua .then). Axios: Perlu install (NPM), otomatis konversi JSON, fitur Interceptors (untuk auth token), dan penanganan timeout yang lebih baik.',
    codeSnippet: `// Axios unggul dalam interceptors
const api = axios.create({ baseURL: '/api' });
api.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer TOKEN';
  return config;
});`
  },
  {
    id: 'f15',
    category: 'Fundamental',
    title: 'TypeScript: Interface vs Type Aliases',
    description: 'Mendefinisikan kontrak data yang aman dan terdokumentasi.',
    fullTheory: 'Interface: Bisa digabung (declaration merging), ideal untuk objek. Type Aliases: Lebih fleksibel (bisa untuk union, primitive, tuple), tapi tidak bisa digabung dng cara yang sama. Gunakan Interface untuk struktur data API dan Type untuk kombinasi tipe kompleks.',
    codeSnippet: `interface User { id: number; name: string; }
type PostStatus = 'draft' | 'published';

const myPost: PostStatus = 'draft';`
  },
  {
    id: 'f16',
    category: 'Fundamental',
    title: 'JSON Data Manipulation (Parsing & Stringify)',
    description: 'Mengolah format pertukaran data standar web.',
    fullTheory: 'JSON (JavaScript Object Notation) adalah format berbasis teks. JSON.parse() mengubah string menjadi objek JS. JSON.stringify() mengubah objek JS kembali menjadi string (sering digunakan saat mengirim data ke API via body).',
    codeSnippet: `const jsonStr = '{"id": 1}';
const obj = JSON.parse(jsonStr); // Objek JS

const backToStr = JSON.stringify(obj); // String mentah`
  },
  {
    id: 'f17',
    category: 'Fundamental',
    title: 'Responsive Strategy: The Mobile-First Approach',
    description: 'Membangun dari yang terkecil untuk efisiensi performa.',
    fullTheory: 'Mulailah menulis CSS di luar media query untuk tampilan mobile. Gunakan @media (min-width: ...) untuk menambahkan gaya pada tablet dan desktop. Ini memastikan browser mobile tidak perlu membaca kode desktop yang berat.',
    codeSnippet: `/* Default Mobile */
.sidebar { display: none; }

/* Desktop (min-width 768px) */
@media (min-width: 768px) {
  .sidebar { display: block; }
}`
  },
  {
    id: 'f18',
    category: 'Fundamental',
    title: 'Git Core Flow: Commits, Branches, & Pulls',
    description: 'Pondasi kolaborasi tim developer profesional.',
    fullTheory: 'Gunakan Branch untuk fitur baru agar kode "main" tetap stabil. Commit secara rutin dng pesan deskriptif. Pull sebelum mulai bekerja untuk sinkronisasi dng perubahan tim lain.',
    codeSnippet: `# Alur standar kerja satu fitur
git checkout -b feat/login
# ...coding...
git add .
git commit -m "feat: tambahkan validasi email"
git push origin feat/login`
  },
  {
    id: 'f19',
    category: 'Fundamental',
    title: 'BEM CSS Methodology: Clean & Scalable Styles',
    description: 'Menghindari kekacauan CSS di proyek besar.',
    fullTheory: 'Block (__Element) (--Modifier). Block: Komponen induk (.card). Element: Bagian di dalamnya (.card__icon). Modifier: Variasi gaya (.card--large). Memberikan kejelasan kaitan antar elemen CSS.',
    codeSnippet: `<div class="card card--featured">
  <img class="card__img" src="..." />
  <h2 class="card__title">Judul</h2>
</div>`
  },
  {
    id: 'f20',
    category: 'Fundamental',
    title: 'Pseudo-classes & Pseudo-elements Mechanics',
    description: 'Memanipulasi keadaan elemen tanpa kelas tambahan.',
    fullTheory: 'Pseudo-class (:): Berdasarkan keadaan/state (misal :hover, :focus, :nth-child(2)). Pseudo-element (::): Berdasarkan bagian elemen yang tidak nyata di HTML (misal ::after, ::before untuk hiasan).',
    codeSnippet: `a:hover { color: orange; }

h1::after {
  content: '';
  display: block;
  width: 50px; height: 2px;
  background: red;
}`
  },
  {
    id: 'f21',
    category: 'Fundamental',
    title: 'CSS Custom Properties (Variables)',
    description: 'Mengelola tema dan variabel gaya secara dinamis.',
    fullTheory: 'Berbeda dng variabel SASS, CSS Variables dapat diakses oleh JavaScript secara real-time. Deklarasikan di :root untuk penggunaan global. Sangat mudah untuk implementasi Dark Mode.',
    codeSnippet: `:root { --primary: #007bff; }

.btn {
  background-color: var(--primary);
}

/* Update via JS: document.documentElement.style.setProperty('--primary', 'red') */`
  },
  {
    id: 'f22',
    category: 'Fundamental',
    title: 'JavaScript Hoisting & TDZ',
    description: 'Memahami bagaimana JS menginisialisasi kode.',
    fullTheory: 'Hoisting mengangkat deklarasi ke atas scope. Var diangkat dng nilai undefined. Let & Const juga diangkat tapi berada di Temporal Dead Zone (TDZ) sampai inisialisasi dilakukan, sehingga akan error jika diakses sebelumnya.',
    codeSnippet: `console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError (TDZ)
let b = 2;`
  },
  {
    id: 'f23',
    category: 'Fundamental',
    title: 'Arrow Functions vs Traditional Functions',
    description: 'Kapan harus menggunakan tanda panah?',
    fullTheory: 'Arrow function tidak memiliki "this" sendiri (ia mengambil dari scope induk). Ia juga tidak punya objek "arguments". Gunakan arrow function untuk callback dan method yang butuh konteks "this" konstan.',
    codeSnippet: `const person = {
  name: 'Mochrks',
  sayHi: function() {
    setTimeout(() => {
      console.log('Hi ' + this.name); // 'this' merujuk ke person
    }, 100);
  }
};`
  },
  {
    id: 'f24',
    category: 'Fundamental',
    title: 'Modern JS: Destructuring & Spread Operators',
    description: 'Menulis kode yang lebih bersih dan deklaratif.',
    fullTheory: 'Destructuring: Ekstrak nilai dari array/objek langsung ke variabel. Spread (...): Menyebarkan item array/objek ke konteks baru. Sangat membantu dalam manipulasi state framework.',
    codeSnippet: `const user = { id: 1, name: 'Admin' };
const { name } = user; // Ambil name saja

const updatedUser = { ...user, active: true }; // Clone & Update`
  },
  {
    id: 'f25',
    category: 'Fundamental',
    title: 'Asynchronous JS: Promises & Async/Await',
    description: 'Menangani operasi yang butuh waktu (Non-blocking).',
    fullTheory: 'Dulu kita menggunakan Callback (callback hell). Sekarang kita menggunakan Promise yang bisa dirantai (.then) atau Async/Await yang membuat kode asinkron terlihat seperti sinkron dan lebih bersih.',
    codeSnippet: `async function register() {
  const result = await api.post('/register', data);
  console.log('User Terdaftar:', result);
}
// Tidak memblokir thread utama!`
  },

  // --- CORE ENGINEERING (26-50) ---
  {
    id: 'c1',
    category: 'Core Engineering',
    title: 'React Component Lifecycle & Reconciliation',
    description: 'Bagaimana React memutuskan kapan harus update UI.',
    fullTheory: 'React menggunakan Virtual DOM untuk membandingkan (diffing) perubahan. Tahapan: Render (persiapan) ➔ Commit (perubahan ke DOM asli). Gunakan lifecycle untuk fetch data atau cleanup event listener agar tidak memory leak.',
    codeSnippet: `useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  return () => clearInterval(timer); // Cleanup saat unmount
}, []);`
  },
  {
    id: 'c2',
    category: 'Core Engineering',
    title: 'React State Mastery: useState & useReducer',
    description: 'Mengelola data internal komponen dng presisi.',
    fullTheory: 'useState ideal untuk data sederhana tunggal. useReducer lebih baik untuk logic state kompleks yang melibatkan banyak aksi (mirip Redux). Selalu perlakukan state sebagai data immutable (jangan ubah langsung).',
    codeSnippet: `const [state, dispatch] = useReducer(reducer, initial);
// dispatch({ type: 'INCREMENT' });`
  },
  {
    id: 'c3',
    category: 'Core Engineering',
    title: 'Context API: The Prop Drilling Solution',
    description: 'Mengirim data ke komponen terdalam tanpa perantara.',
    fullTheory: 'Gunakan Context untuk data global seperti preferensi bahasa atau login status. Hindari memasukkan terlalu banyak data yang sering berubah karena akan memicu re-render di semua komponen konsumen.',
    codeSnippet: `const UserContext = createContext();
// const user = useContext(UserContext);`
  },
  {
    id: 'c4',
    category: 'Core Engineering',
    title: 'Advanced Hooks: useMemo & useCallback',
    description: 'Optimasi performa dengan stabilisasi referensi.',
    fullTheory: 'useMemo: Menyimpan hasil perhitungan berat. useCallback: Menyimpan instans fungsi agar tidak dibuat ulang tiap render. Penting saat mengirim fungsi ke komponen anak yang terbungkus React.memo.',
    codeSnippet: `const hitungBerat = useMemo(() => calc(data), [data]);
const handler = useCallback(() => click(), []);`
  },
  {
    id: 'c5',
    category: 'Core Engineering',
    title: 'Ref Mastery: useRef & useImperativeHandle',
    description: 'Berinteraksi langsung dng DOM secara aman.',
    fullTheory: 'useRef menyimpan referensi elemen DOM atau nilai yang persisten tanpa memicu render ulang. useImperativeHandle digunakan dng forwardRef untuk mengekspos fungsi komponen anak ke induknya.',
    codeSnippet: `const inputRef = useRef(null);
// inputRef.current.focus();`
  },
  {
    id: 'c6',
    category: 'Core Engineering',
    title: 'TanStack Query: Server State Management',
    description: 'Lupakan fetch data di useEffect biasa.',
    fullTheory: 'Mengelola data dari API dng fitur caching, loading/error state otomatis, sinkronisasi background, dan retry logic. Jauh lebih produktif daripada integrasi manual.',
    codeSnippet: `const { data, isLoading } = useQuery(['p'], fetchP);`
  },
  {
    id: 'c7',
    category: 'Core Engineering',
    title: 'Zustand: Predictable Global Store',
    description: 'State management modern yang minimalis namun perkasa.',
    fullTheory: 'Zustand menghilangkan boilerplate Redux (reducer/action). Akses state via hook langsung dng performa tinggi dan dukungan devtools yang hebat.',
    codeSnippet: `const useStore = create((set) => ({
  bears: 0,
  increase: () => set((s) => ({ bears: s.bears + 1 })),
}));`
  },
  {
    id: 'c8',
    category: 'Core Engineering',
    title: 'Forms: React Hook Form & Zod Strategy',
    description: 'Validasi form berperforma tinggi dng schema-driven.',
    fullTheory: 'React Hook Form menggunakan ref (uncontrolled) untuk meminimalkan re-render. Zod menyediakan validasi tipe data (schema) yang sangat presisi dan sinkron dng TypeScript.',
    codeSnippet: `const schema = z.object({ email: z.string().email() });
const { register } = useForm({ resolver: zodResolver(schema) });`
  },
  {
    id: 'c9',
    category: 'Core Engineering',
    title: 'Next.js App Router: Layouts & Navigation',
    description: 'Standar baru pengalamatan web modern.',
    fullTheory: 'App Router mendukung layout bertingkat, streaming UI dng Suspense, dan Server Components secara bawaan. Folder app/ menentukan jalur URL aplikasi Anda.',
    codeSnippet: `// app/blog/[slug]/page.tsx
export default function Post({ params }) { ... }`
  },
  {
    id: 'c10',
    category: 'Core Engineering',
    title: 'Server Components vs Client Components',
    description: 'Pemisahan beban kerja antara Server dan Browser.',
    fullTheory: 'Server Components (default) dirender di server, mengurangi JS yang dikirim ke client. Client Components ("use client") digunakan saat butuh interaksi, state, atau event listener.',
    codeSnippet: `"use client";
import { useState } from "react";`
  },
  {
    id: 'c11',
    category: 'Core Engineering',
    title: 'Next.js Server Actions: Zero-API Mutation',
    description: 'Kirim data tanpa perlu membuat endpoint API.',
    fullTheory: 'Definisikan fungsi asinkron dng instruksi "use server" untuk menangani submit form langsung ke database. Menghilangkan kebutuhan rute API terpisah untuk tugas CRUD sederhana.',
    codeSnippet: `async function createPost(formData) {
  "use server";
  db.insert(formData.get("title"));
}`
  },
  {
    id: 'c12',
    category: 'Core Engineering',
    title: 'Optimization: Next/Image & Image Priority',
    description: 'Menghilangkan CLS dan meningkatkan LCP otomatis.',
    fullTheory: 'Komponen Image dari Next.js menangani lazy loading, pengubahan ukuran (resize), dan format WebP secara otomatis. Gunakan properti "priority" untuk elemen di atas lipatan (above the fold).',
    codeSnippet: `<Image src="/hero.jpg" width={500} height={300} priority />`
  },
  {
    id: 'c13',
    category: 'Core Engineering',
    title: 'Internationalization (i18n) at Scale',
    description: 'Membangun aplikasi global dng dukungan multibahasa.',
    fullTheory: 'Internationalization (i18n) melibatkan pemisahan teks UI ke file JSON terpisah. Gunakan library react-i18next untuk menangani pergantian bahasa secara dinamis tanpa reload halaman.',
    codeSnippet: `// English.json: { "hi": "Hello" }
// Indo.json: { "hi": "Halo" }
const { t } = useTranslation();`
  },
  {
    id: 'c14',
    category: 'Core Engineering',
    title: 'Component Pattern: Error Boundaries Depth',
    description: 'Menghindari User melihat layar kosong saat terjadi error.',
    fullTheory: 'Error Boundary adalah komponen kelas yang menangkap error JavaScript di mana saja dalam pohon komponen di bawahnya. Tampilkan pesan error yang ramah atau tombol "Refresh Page".',
    codeSnippet: `<ErrorBoundary fallback={<p>Maaf, ada masalah.</p>}>
  <MainConten />
</ErrorBoundary>`
  },
  {
    id: 'c15',
    category: 'Core Engineering',
    title: 'Code Splitting & Dynamic Imports Strategy',
    description: 'Mempercepat load pertama aplikasi dng memecah JS.',
    fullTheory: 'Jangan kirim 2MB JS di halaman Login. Gunakan dynamic imports untuk memuat komponen berat (misal Chart atau Editor) hanya saat dibutuhkan oleh user.',
    codeSnippet: `const HeavyMap = dynamic(() => import("./Map"), { ssr: false });`
  },
  {
    id: 'c16',
    category: 'Core Engineering',
    title: 'Unit Testing: Logic & Helper Validation',
    description: 'Menjamin fungsi algoritma tetap benar selamanya.',
    fullTheory: 'Unit Testing (Jest/Vitest) menguji satu fungsi terkecil secara murni. Gunakan untuk validasi perhitungan harga, format tanggal, atau manipulasi string data API.',
    codeSnippet: `test('tambah 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});`
  },
  {
    id: 'c17',
    category: 'Core Engineering',
    title: 'Integration Testing: UI Interaction Flows',
    description: 'Menguji bagaimana komponen bekerja sama di DOM.',
    fullTheory: 'Integration testing dng React Testing Library mensimulasikan penggunaan user asli. Cek jika diklik button, modal muncul dan teks berubah sesuai ekspektasi.',
    codeSnippet: `render(<App />);
fireEvent.click(screen.getByText('Beli'));
expect(screen.getByText('Di Keranjang')).toBeInTheDocument();`
  },
  {
    id: 'c18',
    category: 'Core Engineering',
    title: 'E2E Testing: Complete User Workflows',
    description: 'Uji alur bisnis kritis secara otomatis di browser asli.',
    fullTheory: 'E2E (End-to-End) dng Playwright atau Cypress menguji skenario utuh: Buka web ➔ Login ➔ Tambah Barang ➔ Checkout. Memberikan tingkat kepercayaan diri tertinggi sebelum rilis.',
    codeSnippet: `await page.goto('/login');
await page.fill('#user', 'admin');
await page.click('#login-btn');`
  },
  {
    id: 'c19',
    category: 'Core Engineering',
    title: 'Mocking APIs dng Mock Service Worker (MSW)',
    description: 'Testing dng data API palsu yang realistis.',
    fullTheory: 'MSW menghadang request network di tingkat browser/node. Memungkinkan Anda menulis test UI tanpa harus menjalankan server backend sungguhan, mempercepat proses CI/CD.',
    codeSnippet: `rest.get('/api/user', (req, res, ctx) => {
  return res(ctx.json({ name: 'Admin' }));
})`
  },
  {
    id: 'c20',
    category: 'Core Engineering',
    title: 'Axios Interceptors: Global Request Handling',
    description: 'Otomatisasi token dan penanganan error API.',
    fullTheory: 'Sisipkan header Authorization secara otomatis. Tangani error 401 Unauthorized dng melempar user kembali ke halaman login tanpa harus menulis logic di tiap fungsi fetch.',
    codeSnippet: `api.interceptors.request.use(cfg => {
  cfg.headers.auth = getToken();
  return cfg;
});`
  },
  {
    id: 'c21',
    category: 'Core Engineering',
    title: 'React Custom Hooks: Logic Extraction Strategy',
    description: 'Organisasi pola kode yang sering berulang.',
    fullTheory: 'Jika Anda sering menulis logic timer, fetching, atau form, bungkus ke dalam hook (misal useDebounce, useForm). Komponen Anda akan menjadi ringkas dan fokus pada tampilan.',
    codeSnippet: `function useDebounce(value, delay) {
  // logic timer...
  return debouncedValue;
}`
  },
  {
    id: 'c22',
    category: 'Core Engineering',
    title: 'Storybook: The UI Documentation Standard',
    description: 'Katalog interaktif untuk tim design dan developer.',
    fullTheory: 'Storybook memungkinkan Anda merancang komponen dalam isolasi. Tim desainer data bisa mengecek variasi komponen (Primary, Disabled, Loading) tanpa harus menjalankan alur aplikasi penuh.',
    codeSnippet: `export const Primary = { args: { label: 'Klik' } };`
  },
  {
    id: 'c23',
    category: 'Core Engineering',
    title: 'Vite Environment Variables & Modes',
    description: 'Mengelola kunci API dan konfigurasi lintas environment.',
    fullTheory: 'Simpan URL API berbeda untuk development, staging, dan production di file .env. Akses di Vite menggunakan import.meta.env.VITE_API_URL.',
    codeSnippet: `VITE_API_URL=https://prod-api.com`
  },
  {
    id: 'c24',
    category: 'Core Engineering',
    title: 'TypeScript Generics: Advanced Components',
    description: 'Membangun utilitas dan komponen yang fleksibel dan typesafe.',
    fullTheory: 'Generics (<T>) bertindak sebagai placeholder tipe data. Memungkinkan pembuatan komponen seperti Tabel atau Select yang bisa menerima objek apa saja namun tetap tahu tipe isinya.',
    codeSnippet: `function List<T>({ items }: { items: T[] }) { ... }`
  },
  {
    id: 'c25',
    category: 'Core Engineering',
    title: 'PWA Essentials: Manifest & Service Workers',
    description: 'Web yang berperilaku seperti aplikasi mobile.',
    fullTheory: 'Sediakan file manifest.json untuk ikon dan nama app, serta Service Worker untuk mengelola cache offline. Aplikasi Anda akan bisa diinstall dan dibuka meski tanpa koneksi internet.',
    codeSnippet: `// manifest.json
{ "start_url": "/", "display": "standalone" }`
  },

  // --- ARCHITECTURE (51-75) ---
  {
    id: 'a1',
    category: 'Architecture',
    title: 'Feature-Based Folder Structure (Screaming Arch)',
    description: 'Menata proyek berdasarkan domain bisnis halaman.',
    fullTheory: 'Urutkan folder seperti features/auth, features/products. Di dalam tiap fitur ada service, components, dan hooks sendiri. Hal ini mencegah folder "components" global menjadi tempat sampah raksasa.',
    codeSnippet: `src/features/cart/
  components/
  hooks/
  api/`
  },
  {
    id: 'a2',
    category: 'Architecture',
    title: 'Clean Architecture in Frontend Engineering',
    description: 'Pemisahan tanggung jawab antara UI, Logic, dan Data.',
    fullTheory: 'Lapisan: Presentation (View) ➔ Domain (Business Logic) ➔ Data (API calls). UI tidak boleh memanggil API langsung, ia harus memanggil UseCase/Service. Membuat kode mudah diganti atau diuji.',
    codeSnippet: `// UI Layer
const { user } = useGetUser(); // Business Layer`
  },
  {
    id: 'a3',
    category: 'Architecture',
    title: 'Atomic Design: Atomic, Molecular, & Organismic UI',
    description: 'Metodologi pembangunan sistem desain modular.',
    fullTheory: 'Atom: Elemen terkecil (Button). Molecule: Gabungan atom (SearchForm). Organism: Gabungan molekul (Header). Template: Struktur layout. Page: Konten akhir. Pendekatan ini menjamin konsistensi UI.',
    codeSnippet: `Atom -> Input; Molecule -> FormField;`
  },
  {
    id: 'a4',
    category: 'Architecture',
    title: 'Micro-Frontend Mastery: Module Federation',
    description: 'Membagi satu frontend raksasa menjadi aplikasi kecil.',
    fullTheory: 'Setiap tim mengelola satu aplikasi mikro (misal tim Checkout, tim Profile). Digabungkan saat runtime sehingga tiap tim bisa rilis kapan saja tanpa menunggu tim lain.',
    codeSnippet: `remote: 'app1@http://localhost:3001/remoteEntry.js'`
  },
  {
    id: 'a5',
    category: 'Architecture',
    title: 'Monorepo Strategy dng Turborepo & NX',
    description: 'Berbagi paket dan komponen antarkodingan efisien.',
    fullTheory: 'Gunakan Monorepo jika Anda punya Admin App, Web App, dan Mobile App yang menggunakan Design System yang sama. Turborepo mempercepat build dng caching hasil build sebelumnya.',
    codeSnippet: `apps/web; apps/admin; packages/ui;`
  },
  {
    id: 'a6',
    category: 'Architecture',
    title: 'SOLID Principles in React Development',
    description: 'Panduan menulis komponen yang elastis dan terstruktur.',
    fullTheory: 'S: Single Responsibility (Satu komponen satu tugas). O: Open/Closed (Mudah ditambah fitur tanpa ubah kode asal). L: Liskov (Mudah ditukar). I: Interface Segregation (Prop ringkas). D: Dependency Inversion.',
    codeSnippet: `// Komponen Button tidak urus API`
  },
  {
    id: 'a7',
    category: 'Architecture',
    title: 'Inversion of Control (IoC) Patterns',
    description: 'Memberikan kontrol perilaku ke pemanggil komponen.',
    fullTheory: 'Jangan buat komponen kaku dengan terlalu banyak IF didalamnya. Gunakan render props atau children agar parent yang menentukan isinya (Komposisi).',
    codeSnippet: `<List items={data} renderItem={i => <Card />} />`
  },
  {
    id: 'a8',
    category: 'Architecture',
    title: 'Compound Components: The Advanced UI Pattern',
    description: 'Komunikasi rahasia antar komponen anak dan bapak.',
    fullTheory: 'Contoh terbaik: <Tabs><Tabs.Item /></Tabs>. Komponen Tabs.Item secara otomatis tahu tab mana yang aktif tanpa kita perlu kirim prop ke setiap item (menggunakan Context di belakang layar).',
    codeSnippet: `<Select>
  <Select.Label>Warna</Select.Label>
  <Select.Option value="red">Merah</Select.Option>
</Select>`
  },
  {
    id: 'a9',
    category: 'Architecture',
    title: 'Render Props Pattern Architecture',
    description: 'Berbagi logika behavior antar komponen UI.',
    fullTheory: 'Gunakan fungsi sebagai anak guna mengekspos state internal komponen. Sangat berguna untuk library seperti form validation atau scrolling logic.',
    codeSnippet: `<ScrollListener render={pos => <div>{pos.y}</div>} />`
  },
  {
    id: 'a10',
    category: 'Architecture',
    title: 'Higher-Order Components (HOC) Strategy',
    description: 'Membungkus komponen dengan kekuatan tambahan.',
    fullTheory: 'Gunakan HOC untuk menyuntikkan data atau proteksi rute (misal: withAuth). HOC akan mengecek login sebelum merender komponen asli yang Anda buat.',
    codeSnippet: `const ProtectedProfile = withAuth(Profile);`
  },
  {
    id: 'a11',
    category: 'Architecture',
    title: 'Provider Pattern & State Broadcasting',
    description: 'Mengirimkan data ke seluruh penjuru aplikasi.',
    fullTheory: 'Inti dari library seperti Redux atau ThemeProvider. Membungkus aplikasi dengan Provider memungkinkan data "terjun" ke mana saja tanpa melalui prop intermediate.',
    codeSnippet: `<ThemeProvider theme="dark">...</ThemeProvider>`
  },
  {
    id: 'a12',
    category: 'Architecture',
    title: 'State Reducer Pattern: High-Level Control',
    description: 'Kustomisasi update state dng logic luar.',
    fullTheory: 'Izinkan pengguna komponen Anda untuk menyisipkan fungsi reducer sendiri untuk mengontrol bagaimana state internal komponen berubah saat terjadi aksi.',
    codeSnippet: `const { state } = useToggle({ reducer: myReducer });`
  },
  {
    id: 'a13',
    category: 'Architecture',
    title: 'Prop Collections & Getters Pattern',
    description: 'Menyederhanakan antarmuka komponen kompleks.',
    fullTheory: 'Kembalikan sekumpulan props yang sudah jadi (spread props) dari sebuah hook agar user tinggal memasangnya di elemen UI tanpa perlu urus event manual.',
    codeSnippet: `<button {...getToggleProps()} />`
  },
  {
    id: 'a14',
    category: 'Architecture',
    title: 'Controlled vs Uncontrolled Architecture',
    description: 'Siapa pemegang kebenaran data di aplikasi?',
    fullTheory: 'Controlled: Data dipegang React State (Lambat untuk form besar). Uncontrolled: Data dipegang DOM asli (Cepat, butuh Ref). Gunakan sesuai kebutuhan performa.',
    codeSnippet: `<input value={s} /> vs <input ref={r} />`
  },
  {
    id: 'a15',
    category: 'Architecture',
    title: 'Design System Ops & Standardizing UI',
    description: 'Menjaga konsistensi visual di ribuan halaman.',
    fullTheory: 'Bangun fondasi warna, tipografi, dan grid. Gunakan tools seperti Tailwind Config sebagai satu-satunya sumber kebenaran gaya untuk seluruh tim.',
    codeSnippet: `// tailwind.config.js: colors: { brand: '...' }`
  },
  {
    id: 'a16',
    category: 'Architecture',
    title: 'State Normalization for Complex Data',
    description: 'Optimalisasi data bersarang untuk performa akses.',
    fullTheory: 'Wandah data array raksasa menjadi objek berdasarkan ID { ids: [], entities: {} }. Ini mencegah iterasi loop berat saat mencari satu data spesifik.',
    codeSnippet: `const user = users[userId]; // Akses O(1)`
  },
  {
    id: 'a17',
    category: 'Architecture',
    title: 'Frontend Domain Layer Implementation',
    description: 'Memisahkan logic bisnis dari komponen tampilan.',
    fullTheory: 'Buat file seperti product.service.ts yang berisi algoritma perhitungan diskon atau validasi khusus produk. Komponen React hanya bertugas menampilkan hasilnya.',
    codeSnippet: `export const calcDiscount = (p) => p.price * 0.1;`
  },
  {
    id: 'a18',
    category: 'Architecture',
    title: 'Error Management & Global Boundary Strategy',
    description: 'Perisai aplikasi terhadap bug runtime yang tidak terduga.',
    fullTheory: 'Pasang Error Boundary di level rute utama. Gunakan global error interceptors untuk menangani kegagalan API di seluruh aplikasi secara seragam.',
    codeSnippet: `window.onerror = (msg) => logToSentry(msg);`
  },
  {
    id: 'a19',
    category: 'Architecture',
    title: 'Modern Auth Flows: OAuth2, OIDC & JWT',
    description: 'Keamanan otentikasi standar industri tinggi.',
    fullTheory: 'Pahami Authorize Code Flow dng PKCE. Jangan simpan token di LocalStorage jika memungkinkan; gunakan HttpOnly Cookie untuk mencegah serangan XSS.',
    codeSnippet: `Authorization: Bearer <JWT_TOKEN>`
  },
  {
    id: 'a20',
    category: 'Architecture',
    title: 'Progressive Hydration Essentials',
    description: 'Aktivasi interaktivitas secara bertahap.',
    fullTheory: 'Tidak semua bagian web butuh JS langsung. Aktifkan (Hydrate) komponen hanya saat terlihat di layar atau saat user berinteraksi dng bagian tersebut.',
    codeSnippet: `// Hydrate only on idle or visible`
  },
  {
    id: 'a21',
    category: 'Architecture',
    title: 'Tailwind Orchestration dng cn() & tailwind-merge',
    description: 'Manajemen ribuan kelas CSS tanpa konflik.',
    fullTheory: 'Gunakan fungsi utilitas cn() untuk menggabungkan kelas secara kondisional. tailwind-merge akan memastikan kelas terakhir yang menang dng benar.',
    codeSnippet: `className={cn("p-4", isOpen && "block")}`
  },
  {
    id: 'a22',
    category: 'Architecture',
    title: 'Shadcn UI Strategy: The Copy-Paste Pattern',
    description: 'Membangun library komponen internal yang punya kontrol penuh.',
    fullTheory: 'Alih-alih library NPM yang kaku, gunakan Radix UI sebagai pondasi aksesibilitas dan Tailwind untuk gaya. Anda memegang source code tiap komponen.',
    codeSnippet: `ui/button.tsx // Kode milik Anda!`
  },
  {
    id: 'a23',
    category: 'Architecture',
    title: 'Micro-Interactions UX Strategy',
    description: 'Detail kecil yang membuat web terasa hidup.',
    fullTheory: 'Tambahkan animasi feedback (getaran tombol, warna hover, progress bar) untuk memberikan kepuasan psikologis saat user melakukan aksi.',
    codeSnippet: `<motion.button whileTap={{ scale: 0.9 }}>`
  },
  {
    id: 'a24',
    category: 'Architecture',
    title: 'SSR vs SSG Strategy Decision Matrix',
    description: 'Menimbang biaya server vs kecepatan muat.',
    fullTheory: 'Pilih SSG jika konten jarang berubah dan butuh SEO maksimal. Pilih SSR jika konten dipersonalisasi tiap user dan butuh data real-time.',
    codeSnippet: `export const dynamic = 'force-dynamic' // SSR`
  },
  {
    id: 'a25',
    category: 'Architecture',
    title: 'AHA Programming (Avoid Hasty Abstration)',
    description: 'Filosofi menulis kode yang fleksibel dan tepat waktu.',
    fullTheory: 'Prioritaskan kode yang mudah dibaca daripada kode yang terlalu banyak dikompresi menjadi fungsi umum sebelum polanya benar-benar jelas (3x pengulangan).',
    codeSnippet: `Write it clear, then make it dry later.`
  },

  // --- ADVANCED (76-100) ---
  {
    id: 'ad1',
    category: 'Advanced',
    title: 'Browser Critical Rendering Path (CRP)',
    description: 'Langkah browser menampilkan pixel dari 0 ke 1.',
    fullTheory: 'Langkah: HTML ➔ DOM, CSS ➔ CSSOM, Gabungkan ➔ Render Tree, Hitung ➔ Layout, Gambar ➔ Paint. Minimalkan CSS yang menghambat render (render-blocking) untuk mempercepat FCP.',
    codeSnippet: `<link rel="preload" href="..." />`
  },
  {
    id: 'ad2',
    category: 'Advanced',
    title: 'JS Engine Deep Dive: V8, JIT, & Garbage Collection',
    description: 'Pusat pemrosesan JavaScript terpintar di dunia.',
    fullTheory: 'V8 (Chrome) melakukan kompilasi Just-In-Time ke kode mesin. Ia mengelola Memory Heap. Hindari memory leak dng selalu menghapus global variabel yang tak terpakai.',
    codeSnippet: `Heap Stack Analysis in DevTools`
  },
  {
    id: 'ad3',
    category: 'Advanced',
    title: 'The Event Loop Mastering: Micro vs Macro Tasks',
    description: 'Mekanisme asinkron terdalam pada single-thread JS.',
    fullTheory: 'Microtasks (Promises) selalu dieksekusi habis sebelum Macrotasks (setTimeout) dimulai di setiap putaran loop. Memahami ini krusial untuk sinkronisasi state yang rumit.',
    codeSnippet: `Promise.resolve().then(() => console.log('1st'));`
  },
  {
    id: 'ad4',
    category: 'Advanced',
    title: 'Web Workers: Parallel Multithreading in Web',
    description: 'Melakukan tugas berat tanpa membekukan antarmuka.',
    fullTheory: 'Gunakan Web Worker untuk kalkulasi matematika rumit, kompresi gambar, atau pemrosesan data besar di thread terpisah. UI tetap lancar 60fps tanpa gangguan.',
    codeSnippet: `worker.postMessage(hugeData);`
  },
  {
    id: 'ad5',
    category: 'Advanced',
    title: 'Service Workers & PWA Cache Implementation',
    description: 'Proksi network yang membuat web bisa berjalan offline.',
    fullTheory: 'Service Worker bisa mencegat setiap request network. Anda bisa menyajikan data dari cache jika server sedang down atau user sedang di mode pesawat.',
    codeSnippet: `self.addEventListener('fetch', (event) => { ... });`
  },
  {
    id: 'ad6',
    category: 'Advanced',
    title: 'Advanced Bundle Optimization & Tree-shaking',
    description: 'Seni mengecilkan ukuran aplikasi web Anda secara radikal.',
    fullTheory: 'Tree-shaking menghapus fungsi yang tidak di-import. Gunakan ES Modules dan tandai "sideEffects: false" di package.json untuk hasil maksimal.',
    codeSnippet: `import { map } from 'lodash-es'; // Bukan lodash biasa`
  },
  {
    id: 'ad7',
    category: 'Advanced',
    title: 'Core Web Vitals Metric Optimization',
    description: 'Standar emas performa web masa depan.',
    fullTheory: 'LCP: Kecepatan render elemen utama. INP: Seberapa cepat web merespons input. CLS: Stabilitas layout. Metrik ini adalah faktor penentu ranking pencarian Google.',
    codeSnippet: `<img fetchpriority="high" src="..." />`
  },
  {
    id: 'ad8',
    category: 'Advanced',
    title: 'Extreme Security: CSP & Iframe Protection',
    description: 'Proteksi tingkat lanjut terhadap pembajakan antarmuka.',
    fullTheory: 'Content Security Policy (CSP) memblokir script luar tak dikenal. X-Frame-Options DENY mencegah penyerang membungkus web Anda ke dalam iframe (Clickjacking).',
    codeSnippet: `Header set X-Frame-Options "DENY"`
  },
  {
    id: 'ad9',
    category: 'Advanced',
    title: 'Subresource Integrity (SRI) Architecture',
    description: 'Menjamin script dari CDN tidak disusupi peretas.',
    fullTheory: 'Sertakan hash pada tag <script>. Jika script di server CDN diubah oleh hacker, browser akan mematikan script tersebut karena hash-nya tidak cocok.',
    codeSnippet: `<script integrity="sha384-HSH_CODE" ... />`
  },
  {
    id: 'ad10',
    category: 'Advanced',
    title: 'WebSocket Architecture: Real-time Streaming',
    description: 'Komunikasi dua arah murni tanpa jeda (low latency).',
    fullTheory: 'TCP Full-duplex connection. Cocok untuk aplikasi Trading, Game Multiplayer, atau Dashboard Monitoring dng ribuan update per detik.',
    codeSnippet: `socket.send(JSON.stringify({ event: 'ping' }));`
  },
  {
    id: 'ad11',
    category: 'Advanced',
    title: 'WebRTC P2P Data & Audio/Video Streams',
    description: 'Mengirimkan data langsung antar browser pengguna.',
    fullTheory: 'Teknologi di balik Zoom Web atau Google Meet. Menghubungkan user secara P2P (Peer-to-Peer) untuk transfer data besar atau streaming media tanpa server perantara.',
    codeSnippet: `navigator.mediaDevices.getUserMedia({ video: true });`
  },
  {
    id: 'ad12',
    category: 'Advanced',
    title: 'Intersection Observer API: Scroll Intelligence',
    description: 'Deteksi keberadaan elemen di viewport dng sangat efisien.',
    fullTheory: 'Gunakan ini untuk Infinite Scroll atau Lazy Load gambar. Jauh lebih ringan daripada harus mendengarkan event "scroll" yang sangat boros CPU.',
    codeSnippet: `new IntersectionObserver(callback, options).observe(target);`
  },
  {
    id: 'ad13',
    category: 'Advanced',
    title: 'Resize Observer Architecture: Responsive Comp',
    description: 'Bukan responsif layar, tapi responsif wadah.',
    fullTheory: 'Jika komponen Sidebar Anda mengecil, komponen di dalamnya bisa berubah layout secara otomatis dng memantau ukuran wadahnya langsung.',
    codeSnippet: `new ResizeObserver(entries => { ... }).observe(box);`
  },
  {
    id: 'ad14',
    category: 'Advanced',
    title: 'Mutation Observer: Watching DOM Changes',
    description: 'Otomatisasi reaksi saat DOM berubah secara dinamis.',
    fullTheory: 'Pantau jika ada script lain yang mengubah teks, atribut, atau struktur elemen anak di dalam DOM tree tertentu.',
    codeSnippet: `new MutationObserver(callback).observe(node, config);`
  },
  {
    id: 'ad15',
    category: 'Advanced',
    title: 'Advanced Prefetching & Resource Preloading',
    description: 'Memuat masa depan aplikasi sebelum user mengklik.',
    fullTheory: 'Analisa perilaku user: Jika user hover tombol Login, mulai prefetch halaman Dashboard di background untuk transisi instan.',
    codeSnippet: `<link rel="prefetch" href="/dashboard.js" />`
  },
  {
    id: 'ad16',
    category: 'Advanced',
    title: 'Network Optimization: HTTP/2 Multiplexing & QUIC',
    description: 'Memahami bagaimana data mengalir di kabel internet.',
    fullTheory: 'HTTP/2 mengizinkan banyak request di satu koneksi (paralel). HTTP/3 berjalan di atas UDP untuk menghilangkan hambatan jabat tangan TCP yang lama.',
    codeSnippet: `One TCP connection, 100 parallel streams!`
  },
  {
    id: 'ad17',
    category: 'Advanced',
    title: 'Optimization: Next-Gen AVIF & WebP Images',
    description: 'Menghemat bandwidth hingga 80% dng teknologi mutakhir.',
    fullTheory: 'AVIF memberikan kompresi lebih baik dari WebP. Gunakan tag <picture> agar browser memilih format terbaik yang didukungnya otomatis.',
    codeSnippet: `<picture><source srcset="i.avif" type="image/avif" /></picture>`
  },
  {
    id: 'ad18',
    category: 'Advanced',
    title: 'WebAssembly (WASM): Native Performance on Web',
    description: 'Menjalankan kode C++, Rust, atau Go di browser dng kencang.',
    fullTheory: 'Gunakan WASM untuk editor foto/video berbasis web atau simulator fisika yang butuh kecepatan eksekusi hampir setara aplikasi PC native.',
    codeSnippet: `const wasm = await WebAssembly.instantiate(module);`
  },
  {
    id: 'ad19',
    category: 'Advanced',
    title: 'Advanced SEO: JSON-LD Structured Data Engineering',
    description: 'Memberikan "otak" pada mesin pencari agar paham isi web.',
    fullTheory: 'Gunakan skema JSON-LD untuk mendeskripsikan Produk, Review, atau Resep agar muncul sebagai Rich Snippets yang menarik di hasil pencarian Google.',
    codeSnippet: `<script type="application/ld+json">{ "@type": "Product" }</script>`
  },
  {
    id: 'ad20',
    category: 'Advanced',
    title: 'Web Workers Comlink: The Simplification Pattern',
    description: 'Berinteraksi dng Web Worker layaknya fungsi biasa.',
    fullTheory: 'Comlink dari Google Chrome menghilangkan kerumitan postMessage. Anda bisa memanggil fungsi di worker layaknya fungsi asinkron (RPC style).',
    codeSnippet: `const api = Comlink.wrap(new Worker('worker.js'));`
  },
  {
    id: 'ad21',
    category: 'Advanced',
    title: 'JavaScript Proxy & Reflect Meta-programming',
    description: 'Menciptakan behavior kustom pada objek dasar JS.',
    fullTheory: 'Inti dari sistem reaktivitas di Vue 3. Anda bisa memantau "get" dan "set" properti objek secara dinamis.',
    codeSnippet: `const p = new Proxy(obj, { set: (t, p, v) => { ... } })`
  },
  {
    id: 'ad22',
    category: 'Advanced',
    title: 'Animations Architecture: GSAP Timelines',
    description: 'Mengelola urutan animasi kompleks dng presisi frame.',
    fullTheory: 'GSAP memungkinkan Anda membuat "sequencing" animasi yang rumit dng sangat mudah dibandingkan CSS Keyframes kaku.',
    codeSnippet: `tl.to(".box", {x: 100}).to(".text", {opacity: 1}, "-=0.2");`
  },
  {
    id: 'ad23',
    category: 'Advanced',
    title: 'Framer Motion: LayoutId Shared Transitions',
    description: 'Animasi perpindahan antar halaman selevel Apple UI.',
    fullTheory: 'Secara otomatis buat animasi halus saat sebuah elemen (misal foto profil) berpindah dari daftar ke halaman detail dng layoutId.',
    codeSnippet: `<motion.div layoutId="avatar-1" />`
  },
  {
    id: 'ad24',
    category: 'Advanced',
    title: 'System Design: Large Scale Feed & Virtualization',
    description: 'Strategi menangani jutaan data dng memori terbatas.',
    fullTheory: 'Jangan render 1.000.000 data. Hanya render elemen yang terlihat di layar (Virtual List) dan hapus yang jauh di atas/bawah untuk hemat RAM.',
    codeSnippet: `import { VirtualList } from 'react-window';`
  },
  {
    id: 'ad25',
    category: 'Advanced',
    title: 'Engineering Mindset: The Senior Path Architecture',
    description: 'Melampaui sekadar penulisan baris kode.',
    fullTheory: 'Seorang Senior Engineer memikirkan Testability, Observability (Logging), Maintenance Cost, Timely Delivery, dan Scalability arsitektur jangka panjang.',
    codeSnippet: `const senior = CodeQuality + Leadership + BusinessValue;`
  }
];
