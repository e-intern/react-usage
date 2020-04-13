Git, GitHub ve GitLab Kullanımı 
	Tavsiye edilen Youtube.com üzerinde Barış Aslan'dan izlenebilir. (https://www.youtube.com/watch?v=rWG70T7fePg&list=PLPrHLaayVkhnNstGIzQcxxnj6VYvsHBHy&index=1)

What's the Git ? 
	..

Git setup
	git-scm.com download os version


Git --version 
	Mevcut git versiyonunu kontrol etmek için kullanılabilir.


Git GUI
	Graphical User Interface grafiksel bir arayüz ile git'i kullanma imkanı sağlar
Git BASH
	Metin tabanlı bir arayüz ile git'i kullanma imkanı sağlar.
Git CMD
	Metinsel tabanlı bir arayüz ile git'i kullanma imkanı sağlar.


Git config --global user.name "user name is here"
	İşletim sistemi üzerinde global olarak kayıtlı kullanıcı adını değiştirebilemek için kullanılır.

Git config --global user.name 
	İşletim sistemi üzerine global olarak kayıtlı kullanıcı adını görüntülemek için kullanılır.

Git config --global user.email "mail@adres.com"
	İşletim sistemi üzerinde global olarak kayıtlı mail adresini değiştirebilemek için kullanılır.

Git config --global user.email 
	İşletim sistemi üzerine global olarak kayıtlı mail adresini görüntülemek için kullanılır.


pwd
	Git bash üzerinde bulunulan mevcut dizinin neresi olduğunu gösterir.
ls/dir
	bulunulan dizin üzerinde ki klasörleri listeler.
ls/dir -a 
	bulunulan dizin üzerinde ki bütün klasörleri (gizli dosyalar dahil) listeler.
cd 
	klasörler arasında gezinmek için kullanılır.
clear/cls
	clear -> git bash üzerinde komut ekranın temizlemeye yarar.
	cls -> git cmd / cmd üzerinde komut ekranın temizlemeye yarar.


git init
	Mevcut dizin üzerinde git projesi oluşturmaya yarar. (Oluşturulan git proje dosyaları gizli olarak oluşturulur)

git add .
	Mevcut dizini git'e (staging area/geçiş bölgesi) eklemeye olanak sağlar.
git add filename
	Belirtilen dosyayı git'e (staging area/geçiş bölgesi) eklmeye olanak sağlar.

git commit -m "neden versiyon alındığını açıklayıcı bir isim olmalı"
	Stating areada bulunan dosyaları git deposuna (repository'sine) eklemek için kullanılır.

git log
	git versiyonlarını listelemek için kullanılır.

git status
	Git projesinde yapılan değişiklikleri görebilmek için kullanılır. (eklenen, silinen yada düzenlenen)

git diff | git diff filename
	Git üzerinde ki var olan değişiklikleri satır satır olarak görebilmeye olanak sağlar.

git diff --staged
	Git repository ve git staging arasında ki değişiklikleri görebilmeye olanak sağlar.

GIT LIFECYCLE 
	|ÇALIŞMA DİZİNİ| ==> ADD ==> |STAGING AREA| ==> COMMIT ==> |GIT REPOSITORY|

git rm filename
	Git üzerinden dosya silmek için kullanılabilir.

git rm -r foldername
	Git üzerinden klasörü ve içerisinde ki dosyaları silmek için kullanılabilir.

git mv oldFileName newFileName
	Git üzerinde eski dosya ismini yeni dosya ismiyle değiştirmek için kullanılır.

git mv fileName folderName
	Git üzerinde ki bir dosyayı istenilen yere taşımak için kullanılabilir.