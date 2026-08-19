'use client';

import { useState } from 'react';
import Link from 'next/link';

// Cappa Viva - Tam Kapsamlı Kapadokya Destinasyon Veri Seti
const destinationsData = [
  // ==========================================
  // 1. BÖLGELER (DESTINATIONS)
  // ==========================================
  { id: "d1", title: "Göreme", category: "Destinations", description: "Kapadokya'nın kalbi. Balonların havalandığı, peri bacalarıyla iç içe geçmiş eşsiz kasaba.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/destinations/goreme" },
  { id: "d2", title: "Uçhisar", category: "Destinations", description: "Bölgenin en yüksek noktası olan kalesi ve lüks mağara otelleriyle ünlü lüks destinasyon.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/destinations/uchisar" },
  { id: "d3", title: "Ürgüp", category: "Destinations", description: "Tarihi konakları, şarap evleri ve efsanevi Üç Güzeller peri bacaları ile meşhur merkez.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/destinations/urgup" },
  { id: "d4", title: "Avanos", category: "Destinations", description: "Kızılırmak kıyısında, Hititlerden günümüze uzanan çömlek atölyeleriyle meşhur tarihi ilçe.", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800", href: "/destinations/avanos" },
  { id: "d5", title: "Ortahisar", category: "Destinations", description: "Devasa kalesi ve otantik köy yaşamıyla Kapadokya'nın bozulmamış duraklarından biri.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/destinations/ortahisar" },
  { id: "d6", title: "Çavuşin", category: "Destinations", description: "Terk edilmiş eski Rum evleri ve devasa kaya kiliseleriyle zamanda yolculuk hissi veren köy.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/destinations/cavusin" },
  { id: "d7", title: "Mustafapaşa (Sinasos)", category: "Destinations", description: "Eski bir Rum kasabası olan, muazzam taş işçiliğine sahip konaklarıyla ünlü tarihi bölge.", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800", href: "/destinations/mustafapasa" },
  { id: "d8", title: "Nevşehir", category: "Destinations", description: "Bölgenin ana idari merkezi ve tarihi yerleşimlerin kalbi.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/destinations/nevsehir" },
  { id: "d9", title: "Derinkuyu", category: "Destinations", description: "Yerin metrelerce altına uzanan efsanevi yeraltı şehrine ev sahipliği yapan ilçe.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/destinations/derinkuyu" },
  { id: "d10", title: "Kaymaklı", category: "Destinations", description: "Kapadokya'nın en geniş ve en çok ziyaret edilen yeraltı şehirlerinden birinin bulunduğu bölge.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/destinations/kaymakli" },
  { id: "d11", title: "Güzelyurt", category: "Destinations", description: "Manastır Vadisi, tarihi kiliseleri ve yeraltı şehirleriyle gizli kalmış bir Kapadokya cenneti.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/destinations/guzelyurt" },
  { id: "d12", title: "Ihlara Vadisi Bölgesi", category: "Destinations", description: "Kanyon boyu uzanan yemyeşil doğası ve kayalara oyulmuş kiliseleriyle efsanevi rota.", image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800", href: "/destinations/ihlara-bolgesi" },

  // ==========================================
  // 2. VADİLER (VALLEYS)
  // ==========================================
  { id: "v1", title: "Aşk Vadisi (Love Valley)", category: "Valleys", description: "Devasa silindirik peri bacaları ve gündoğumunda balonların yarattığı büyüleyici manzara.", image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", href: "/valleys/love-valley" },
  { id: "v2", title: "Gül Vadisi (Rose Valley)", category: "Valleys", description: "Kızıl ve pembe tüf kayalarının gün batımında aldığı muazzam renklerle ünlü yürüyüş rotası.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/valleys/rose-valley" },
  { id: "v3", title: "Kızıl Vadi (Red Valley)", category: "Valleys", description: "Gün batımında kızılın her tonunu görebileceğiniz, Kapadokya'nın en iyi trekking vadisi.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/valleys/red-valley" },
  { id: "v4", title: "Güvercinlik Vadisi (Pigeon Valley)", category: "Valleys", description: "Kayalara oyulmuş binlerce güvercin yuvası ve muazzam Uçhisar Kalesi manzarası.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/valleys/pigeon-valley" },
  { id: "v5", title: "Devrent Vadisi (Imagination Valley)", category: "Valleys", description: "Deve şeklindeki ünlü peri bacası ve hayal gücünüzü zorlayacak kaya oluşumları.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/valleys/devrent" },
  { id: "v6", title: "Paşabağ Vadisi (Monks Valley)", category: "Valleys", description: "Mantar formlu çok başlı peri bacalarının en güzel örnekleri ve eski keşiş hücreleri.", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800", href: "/valleys/pasabag" },
  { id: "v7", title: "Zemi Vadisi", category: "Valleys", description: "Zengin bitki örtüsü ve meyve ağaçları arasında, doğayla iç içe huzurlu bir yürüyüş parkuru.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/valleys/zemi" },
  { id: "v8", title: "Meskendir Vadisi", category: "Valleys", description: "Tünelleri, kaya kiliseleri ve sedir ağaçlarıyla bezeli gizemli trekking rotası.", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800", href: "/valleys/meskendir" },
  { id: "v9", title: "Kılıçlar Vadisi (Sword Valley)", category: "Valleys", description: "Göreme'nin hemen yanı başında, at ve ATV turlarının vazgeçilmez kılıç formlu kayaları.", image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800", href: "/valleys/kiliclar" },
  { id: "v10", title: "Beyaz Vadi (White Valley)", category: "Valleys", description: "Bembeyaz tüf kayalarının arasından kıvrılarak ilerleyen pürüzsüz ve estetik bir vadi.", image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", href: "/valleys/white-valley" },
  { id: "v11", title: "Bağlıdere Vadisi", category: "Valleys", description: "Aşk Vadisi'nin de içinde bulunduğu, etkileyici kaya yapılarıyla dolu uzun bir kanyon.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/valleys/baglidere" },
  { id: "v12", title: "Gomeda Vadisi", category: "Valleys", description: "Gizemli atmosferi, karanlık tünelleri ve çok katlı güvercinlikleriyle Kapadokya'nın saklı yüzü.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/valleys/gomeda" },
  { id: "v13", title: "Soğanlı Vadisi", category: "Valleys", description: "Kübik kaya kiliseleri, bez bebekleri ve otantik köy yaşamıyla tarihi bir yerleşim yeri.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/valleys/soganli" },
  { id: "v14", title: "Ihlara Vadisi", category: "Valleys", description: "Melendiz Çayı'nın şekillendirdiği, yüzlerce kilise ve mağara barındıran devasa kanyon.", image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800", href: "/valleys/ihlara" },
  { id: "v15", title: "Uzengi Vadisi", category: "Valleys", description: "Doğal su kaynakları ve kayalara oyulmuş devasa güvercinlikleriyle büyüleyici bir rota.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/valleys/uzengi" },
  { id: "v16", title: "Pancarlık Vadisi", category: "Valleys", description: "Dalgalı kırmızı ve pembe kaya katmanlarıyla fotoğrafçılar için görsel bir şölen.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/valleys/pancarlik" },
  { id: "v17", title: "Aşk Vadisi 2 (Love Valley Panorama)", category: "Valleys", description: "Tüm Aşk Vadisi'ni kuşbakışı izleyebileceğiniz, fotoğraf çekimleri için en ikonik tepe.", image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", href: "/valleys/love-valley-2" },
  { id: "v18", title: "Çat Vadisi", category: "Valleys", description: "Bölgenin daha bakir kalmış, peri bacaları ve güvercinlikleriyle süslü sessiz rotası.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/valleys/cat-valley" },
  { id: "v19", title: "Güllüdere Vadisi", category: "Valleys", description: "Kayısı ağaçları ve tarihi kiliseler eşliğinde, gün batımının en güzel izlendiği vadilerden.", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800", href: "/valleys/gulludere" },
  { id: "v20", title: "Kızılçukur Vadisi (Red Valley Sunset)", category: "Valleys", description: "Güneş batarken kayaların aldığı parlak kızıl renkle Kapadokya'nın en meşhur seyir noktası.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/valleys/kizilcukur" },

  // ==========================================
  // 3. KİLİSELER (CHURCHES)
  // ==========================================
  { id: "c1", title: "Karanlık Kilise", category: "Churches", description: "Küçük bir pencereden ışık aldığı için renkleri ilk günkü canlılığını koruyan muazzam freskler.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/churches/karanlik" },
  { id: "c2", title: "Tokalı Kilise", category: "Churches", description: "Kapadokya'nın en büyük kaya kilisesi. Büyüleyici lapis lazuli (mavi) renkli freskleriyle öne çıkar.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/churches/tokali" },
  { id: "c3", title: "Elmalı Kilise", category: "Churches", description: "Kubbeli yapısı ve fresklerindeki canlı kırmızı tonlarıyla Göreme Açık Hava Müzesi'nin incisi.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/churches/elmali" },
  { id: "c4", title: "Yılanlı Kilise", category: "Churches", description: "Aziz George'un ejderhayı öldürdüğü sahneyi barındıran freskleriyle ünlü tarihi yapı.", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800", href: "/churches/yilanli" },
  { id: "c5", title: "Çarıklı Kilise", category: "Churches", description: "İsa'nın göğe yükseliş sahnesinin altındaki ayak izi figürleriyle bilinen etkileyici kilise.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/churches/carikli" },
  { id: "c6", title: "Aziz Barbara Kilisesi", category: "Churches", description: "Kırmızı aşı boyasıyla çizilmiş geometrik desenleri ve sembolik motifleriyle eşsizdir.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/churches/aziz-barbara" },
  { id: "c7", title: "El Nazar Kilisesi", category: "Churches", description: "Çadır formundaki devasa bir peri bacasının içine oyulmuş, 10. yüzyıldan kalma özel yapı.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/churches/el-nazar" },
  { id: "c8", title: "Saklı Kilise", category: "Churches", description: "Girişi zor bulunduğu için 'Saklı' adını alan ve çok iyi korunmuş fresklere sahip kilise.", image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", href: "/churches/sakli" },
  { id: "c9", title: "Aynalı Kilise", category: "Churches", description: "İçerisindeki simetrik odalar ve geçitler sayesinde adeta bir labirenti andıran yapı.", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800", href: "/churches/aynali" },
  { id: "c10", title: "Vaftizci Yahya Kilisesi", category: "Churches", description: "Çavuşin köyünün zirvesinde yer alan, bölgenin en eski ve en büyük kiliselerinden biri.", image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800", href: "/churches/vaftizci-yahya" },
  { id: "c11", title: "Meryem Ana Kilisesi", category: "Churches", description: "Göreme Kilıçlar Vadisi yolunda bulunan, Meryem Ana'ya adanmış tarihi ibadethane.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/churches/meryem-ana" },
  { id: "c12", title: "Haçlı Kilise", category: "Churches", description: "Güllüdere Vadisi'nde yer alan ve tavanındaki görkemli haç kabartmasıyla bilinen kilise.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/churches/hacli" },
  { id: "c13", title: "Üzümlü Kilise", category: "Churches", description: "Zelve girişinde bulunan, tavanı üzüm salkımları ve asma yaprağı freskleriyle süslü yapı.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/churches/uzumlu" },
  { id: "c14", title: "Direkli Kilise", category: "Churches", description: "Ihlara Vadisi'nin görkemli yapılarından biri; içerisindeki devasa sütunlarıyla dikkat çeker.", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800", href: "/churches/direkli" },
  { id: "c15", title: "Güllüdere Kiliseleri", category: "Churches", description: "Güllüdere Vadisi içerisine gizlenmiş, erken Hristiyanlık dönemine ait çoklu kaya kiliseleri.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/churches/gulludere" },
  { id: "c16", title: "Çavuşin Vaftizci Yahya Kilisesi", category: "Churches", description: "Çavuşin eski köyünde, kaya kütlesinin içine devasa boyutta oyulmuş muazzam manastır.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/churches/cavusin-vaftizci" },
  { id: "c17", title: "Selime Katedrali", category: "Churches", description: "Ihlara Vadisi'nin sonunda yer alan, Kapadokya'nın en büyük kaya oyma katedral ve manastırı.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/churches/selime" },
  { id: "c18", title: "Ağaçaltı Kilisesi", category: "Churches", description: "Ihlara'nın girişinde bulunan, kırmızı, gri ve sarı renklerin ağırlıkta olduğu kubbeli kilise.", image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", href: "/churches/agacalti" },
  { id: "c19", title: "Kokar Kilise", category: "Churches", description: "Tek nefli ve beşik tonozlu yapısıyla Ihlara Vadisi'nin en iyi korunmuş ibadethanelerinden.", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800", href: "/churches/kokar" },
  { id: "c20", title: "Sümbüllü Kilise", category: "Churches", description: "Ihlara Vadisi'nde dış cephesindeki kaya işlemeleri ve manastır yapısıyla öne çıkan kilise.", image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800", href: "/churches/sumbullu" },
  { id: "c21", title: "Karagedik Kilisesi", category: "Churches", description: "Ihlara'daki diğer kiliselerin aksine Bizans tuğla mimarisiyle inşa edilmiş nadir yapılardan.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/churches/karagedik" },
  { id: "c22", title: "Bahattin Samanlığı Kilisesi", category: "Churches", description: "Belisırma köyünde yer alan, duvarlarındaki detaylı İncil sahneleriyle dikkat çeken ibadethane.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/churches/bahattin" },
  { id: "c23", title: "Aziz Eustathios Kilisesi", category: "Churches", description: "Göreme Açık Hava Müzesi'nin hemen dışında, erken döneme ait ilginç mimarisiyle öne çıkar.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/churches/eustathios" },
  { id: "c24", title: "Aziz Basil Şapeli", category: "Churches", description: "Göreme Açık Hava Müzesi girişindeki, azizlerin ve bölgeyi kuran piskoposların resmedildiği şapel.", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800", href: "/churches/basil" },
  { id: "c25", title: "Aziz Onuphrius Kilisesi", category: "Churches", description: "Yılanlı Kilise ile aynı kompleks içinde yer alan, münzevi Aziz Onuphrius'a adanmış bölüm.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/churches/onuphrius" },

  // ==========================================
  // 4. MÜZELER (MUSEUMS)
  // ==========================================
  { id: "m1", title: "Göreme Açık Hava Müzesi", category: "Museums", description: "Erken Hristiyanlık dönemine ait kaya kiliseleri ve eşsiz freskleriyle UNESCO Dünya Mirası.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/museums/goreme" },
  { id: "m2", title: "Zelve Açık Hava Müzesi", category: "Museums", description: "Sivri uçlu peri bacalarının en yoğun olduğu, üç vadiden oluşan eski bir yerleşim yeri.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/museums/zelve" },
  { id: "m3", title: "Karanlık Kilise", category: "Museums", description: "Hem bir kilise hem de müzenin en değerli parçası; ışık almadığı için renkleri eşsizdir.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/museums/karanlik-kilise" },
  { id: "m4", title: "Tokalı Kilise", category: "Museums", description: "Göreme Müzesi'nin en görkemli yapısı, İsa'nın hayatını anlatan detaylı mozaik ve freskler.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/museums/tokali-kilise" },
  { id: "m5", title: "El Nazar Kilisesi", category: "Museums", description: "Restore edilerek müzeye dönüştürülen, devasa bir peri bacasının içindeki büyüleyici ibadethane.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/museums/el-nazar" },
  { id: "m6", title: "Çarıklı Kilise", category: "Museums", description: "Göreme Müzesi biletine dahil olan, İsa'nın çarmıha gerilişi sahneleriyle meşhur yapı.", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800", href: "/museums/carikli" },
  { id: "m7", title: "Aziz Barbara Kilisesi", category: "Museums", description: "İkonoklast (resim kırıcılık) döneminin izlerini taşıyan kiremit rengi motifli kilise müzesi.", image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", href: "/museums/aziz-barbara" },
  { id: "m8", title: "Nevşehir Müzesi", category: "Museums", description: "Bölgenin arkeolojik ve etnografik eserlerinin sergilendiği, tarihi aydınlatan merkez.", image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", href: "/museums/nevsehir" },
  { id: "m9", title: "Güray Müze (Yer Altı Seramik)", category: "Museums", description: "Yerin altında kayalara oyulmuş, dünyanın ilk ve tek yeraltı seramik ve çömlek müzesi.", image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800", href: "/museums/guray" },
  { id: "m10", title: "Hacıbektaş Müzesi", category: "Museums", description: "Hacı Bektaş Veli'nin türbesinin bulunduğu, Alevi-Bektaşi kültürünün merkez dergahı.", image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", href: "/museums/hacibektas" },
  { id: "m11", title: "Saç Müzesi (Chez Galip)", category: "Museums", description: "Dünyanın en ilginç müzelerinden biri; binlerce kadının bıraktığı saç tellerinden oluşur.", image: "https://images.unsplash.com/photo-1527668612988-9d8f8fb4eeab?q=80&w=800", href: "/museums/hair-museum" },
  { id: "m12", title: "Kapadokya Sanat ve Tarih Müzesi", category: "Museums", description: "Bölge tarihinin ve kültürünün el yapımı kitre bebeklerle anlatıldığı özel müze.", image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800", href: "/museums/art-history" },
  { id: "m13", title: "Açık Saray Ören Yeri", category: "Museums", description: "Gülşehir'de bulunan, tüf kayalara oyulmuş çok katlı Bizans dönemi kaya yerleşimi.", image: "https://images.unsplash.com/photo-1606775618585-703358043644?q=80&w=800", href: "/museums/acik-saray" },
  { id: "m14", title: "Selime Manastırı", category: "Museums", description: "Bölgenin en büyük dini yapısı. Kale görünümündeki manastırda mutfak ve şapel odaları bulunur.", image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", href: "/museums/selime" },
  { id: "m15", title: "Sobesos Antik Kenti ve Mozaik Alanı", category: "Museums", description: "Kapadokya'da bulunan tek geç Roma dönemi antik kenti, muazzam taban mozaikleriyle ünlüdür.", image: "https://images.unsplash.com/photo-1596700508535-9a8c6b5cc019?q=80&w=800", href: "/museums/sobesos" }
];

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtre butonları için kategoriler
  const categories = ["All", "Destinations", "Valleys", "Churches", "Museums"];

  // Seçilen kategoriye göre veriyi filtrele
  const filteredData = activeCategory === "All" 
    ? destinationsData 
    : destinationsData.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pb-24 selection:bg-yellow-500 selection:text-black">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION (Üst Başlık Alanı) */}
      {/* ========================================= */}
      <div className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 text-center overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
        {/* Arka plan görseli ve karanlık katman */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=2000" 
            alt="Cappadocia Landscape" 
            className="w-full h-full object-cover opacity-30 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Explore The Magic
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
            Discover <br className="md:hidden" /> Destinations
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bölgeler, gizemli vadiler, tarihi müzeler ve binlerce yıllık kiliseler. Kapadokya'nın her köşesini detaylarıyla keşfedin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        
        {/* ========================================= */}
        {/* 2. DİNAMİK FİLTRELEME MENÜSÜ */}
        {/* ========================================= */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center bg-white/5 p-2 rounded-2xl backdrop-blur-md border border-white/10 w-fit mx-auto shadow-2xl">
          {categories.map((category, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 
                ${activeCategory === category 
                  ? "bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
                  : "text-gray-300 hover:bg-white/10 hover:text-white"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ========================================= */}
        {/* 3. DESTİNASYON KARTLARI (GRID) */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((dest) => (
            <Link href={dest.href} key={dest.id} className="group h-full">
              <div className="bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 cursor-pointer border border-white/10 hover:border-yellow-500/50 h-full flex flex-col group-hover:-translate-y-2 shadow-xl">
                
                {/* Resim Alanı */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Kategori Etiketi */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    {dest.category}
                  </div>
                </div>

                {/* İçerik Alanı */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Dekoratif Çizgi */}
                  <div className="absolute top-0 left-8 w-12 h-1 bg-yellow-500 rounded-b-md"></div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-500 transition-colors mt-2">
                    {dest.title}
                  </h3>
                  <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed text-sm flex-grow">
                    {dest.description}
                  </p>
                  
                  {/* Alt Buton / Link Oku */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                      Discover
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                      <svg className="w-5 h-5 text-white group-hover:text-black transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Sonuç Bulunamadığında Gösterilecek Alan */}
        {filteredData.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-lg border border-dashed border-white/20 rounded-3xl mt-10">
            Bu kategoride henüz bir destinasyon eklenmemiş.
          </div>
        )}

      </div>
    </main>
  );
}