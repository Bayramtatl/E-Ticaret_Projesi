# Fruithka E-Ticaret Sitesi Otomasyonu Projesi
Bu proje Angular 17i .Net 7.0 ve Sql Server kullanılarak oluşturulmuştur ve bir gıda ürünü satıcı firmanın ürünlerini internet üzerinden satışını mümkün kılan otomasyon yazılımıdır.
Projenin tanıtımı görsel tanıtımı için [Dökümantasyon](https://github.com/Bayramtatl/TechCareer_HyperCompany_AngularProject/blob/master/Documents/Fruithka%20-%20Bayram%20Tatl%C4%B1.pdf)


![Küçük bir tanıtım](https://github.com/Bayramtatl/TechCareer_HyperCompany_AngularProject/blob/master/Documents/Bayramtatl_TechCareer_HyperCompany_AngularProjectvedier3sayfa-Kiisel-MicrosoftEdge2024-01-3023-27-52-ezgif.com-video-to-gif-converter.gif)
## Backend'in kurulumu
Backend dosyaları içerisinde yer alan appsettings.json içerisine veri tabanı bağlantısı yapılır.
```sh
add-migration 1000
update-database
```
Yukarıdaki kodlar npm konsoluna girilerek veritabanı code first yöntemi aracılığıyla güncellenmiş olur.

## Frontend'in kurulumu

Projede yüklü olan paketlerin güncellenebilmesi için ve projenin açılması için sırasıyla
```sh
npm install
ng serve -o
```
kodları girilmelidir.

## Kullanılan Teknolojiler
### FrontEnd
* Bootstrap
* Font-awesome
* Datatables
* Alertify
* Jquery
* Javascript - Typescript
* Angular
### Backend
* .Net 7.0
* EntityFramework
* Swagger
* Microsoft Sql Server
