import restfulws from './assets/images/restful_ws.png'
import hardhat from './assets/images/hard_hat.jpeg'
import flippyburn from './assets/images/flippy_burn.png'
import skillicon from './assets/images/techstack.png'

export const projects = [
    {
        id: 1,
        title: "Kurumsal Web Servis Projesi",
        keywords: "Java, Spring Boot, RESTful API",
        description: "GİB Teknoloji firmasının Web Servis biriminde Spring Boot çatısı kullanılarak, güvenli ve ölçeklenebilir bir RESTful web servisi geliştirildi. Temel CRUD işlemlerinin yanı sıra, zamanlayıcı bir asenkron servise, DTO prensiplerine ve SwaggerUI arayüzüne sahip modüler, anlaşılabilir, güvenilir ve bakımı kolay bir mimari ile tasarlandı",
        link: "https://github.com/mertcankhvcoglu/RESTful-WS",
        image: restfulws
    },
    {
        id: 2,
        title: "Baret Tespit Sistemi",
        keywords: "Python, YOLOv8",
        description: "İş güvenliğini artırmak amacıyla gerçek zamanlı bir Bilgisayarlı Görü (Computer Vision) sistemi geliştirildi. Derin öğrenme modeli olan YOLOv8 kullanılarak yüksek doğrulukta kişi ve baret tespiti sağlandı.",
        link: "https://github.com/mertcankhvcoglu/Hard-Hat-Detection",
        image: hardhat
    },
    {
        id: 3,
        title: "Flippy Burn Mobil Oyun",
        keywords: "Unity, C#",
        description: "Unity oyun motoru ve C# programlama dili kullanılarak çeşitli 2D ve 3D oyun prototipleri geliştirildi. Bu projeler kapsamında oyun mekanikleri, karakter hareketleri, fizik motoru kullanımı ve kullanıcı arayüzü (UI) tasarımı gibi konularda pratik deneyim kazanıldı.",
        link: "https://github.com/mertcankhvcoglu/Flippy-Burn",
        image: flippyburn
    }
]

export const skills = [
    { id: 1, title: "Java", icon: skillicon },
    { id: 2, title: "Spring Boot", icon: skillicon },
    { id: 3, title: "RESTful API", icon: skillicon },
    { id: 4, title: "React", icon: skillicon },
    { id: 5, title: "Javascript", icon: skillicon },
    { id: 6, title: "SQL", icon: skillicon },
    { id: 7, title: "Python", icon: skillicon },
    { id: 8, title: "YOLOv8", icon: skillicon },
    { id: 9, title: "Unity", icon: skillicon },
    { id: 10, title: "C#", icon: skillicon },
]