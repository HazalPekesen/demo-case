import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";

export default function Home() {
  const items = [
    {
      title: "OKX hangi ürünleri sunuyor?",
      text: "OKX, gelişmiş finansal tekliflere sahip yenilikçi bir kripto para borsasıdır. 180’den fazla bölgede dünya çapında milyonlarca kullanıcıya son teknoloji kripto alım-satımı ve kazanç hizmetleri sunuyoruz.\n OKX ile şunları yapabilirsiniz: • SSpot, marjin ve vadeli işlem piyasalarında yüzlerce token ve al-sat çifti ile al-sat yapın.\n • Tüm merkeziyetsiz varlıklarınızı tek bir yerde düzenlemek için Web3 cüzdanınızı bağlayarak DeFi (Merkeziyetsiz Finans) portföyünüzü yönetebilirsiniz.\n • NFT piyasasında çeşitli NFT’ler oluşturabilir, satın alabilir veya satabilirsiniz.\n • DeFi (Merkeziyetsiz Finans) ve blok zinciri oyun DApp’leri dahil en iyi merkeziyetsiz uygulamaları keşfedebilirsiniz.\n • Uygulamamız veya tarayıcı uzantımız aracılığıyla Web3 cüzdanımızla DeFi’a (Merkeziyetsiz Finans) bağlanabilirsiniz.\n • Madencilik havuzlarımızda kripto kazanabilir,kripto teminatlı krediler alabilir ve OKX Earn ile kriptonuzu çoğaltmanın diğer yollarını keşfedebilirsiniz.\n • Dünyaca ünlü TradingView Platformu’na bağlanarak platformun son derece detaylı grafikleriyle kripto alıp satabilirsiniz.",
      open: false,
      idx: 0,
    },
    {
      title: "OKX’te nasıl Bitcoin satın alırım?",
      text: "GBP, EUR, USD veya yerel para biriminizle dakikalar içinde kolayca Bitcoin satın alı. OKX; Visa, Mastercard ve ApplePay kredi kartları da dahil olmak üzere çeşitli popüler ödeme yöntemlerini destekler. Başlamak için OKX ile Bitcoin satın alma hakkındaki en son kılavuzumuza göz atın. Kripto ekosisteminde ilgi çeken diğer coin’leri alıp satmak veya elinizde tutmak mı istiyorsunuz? Yolculuğunuza hemen başlamak için aşağıdaki ücretsiz kaynaklara göz atın:\n • BTC Satın Al\n • USDT Satın Al\n • ETH Satın Al\n • DOT Satın Al\n • SOL Satın Al\n • Doge Satın Al\n • XRP Satın Al\n • OKB Satın Al\n • BCH Satın Al\n",
      open: false,
      idx: 1,
    },
    {
      title: "OKX nerede kuruldu?",
      text: "2017 yılında kurulan OKX, yeni nesil finansal ekosistemi inşa etmek için blok zinciri teknolojisini benimseyen Seyşeller’de kayıtlı bir kripto para borsasıdır ve yüzlerce kripto para için çeşitli işlem türleri sunar.",
      open: false,
      idx: 2,
    },
    {
      title: "ABD vatandaşları OKX’i kullanabilir mi?",
      text: "OKX Amerika Birleşik Devletleri’ndeki kullanıcılara hizmet vermemektedir. Platformumuz, Amerika Birleşik Devletleri ve diğer kısıtlı yerler dışında dünya çapında hizmet sağlamaktadır.\n Tüm ayrıntılar için Hizmet Şartları sayfamızı görüntüleyebilirsiniz.",
      open: false,
      idx: 3,
    },
    {
      title: "Kripto nedir?",
      text: "Kripto para blok zinciri teknolojisi üzerinde çalışan merkeziyetsiz dijital para birimidir. Temel özellikleri arasında şeffaflık, sınırsız işlemler ve değişmezlik yer alır. Piyasa değerine göre en popüler kripto paralardan bazıları Bitcoin, Ethereum ve Tether’dir ve OKX’te bunların hepsini al-sat yapmak mümkündür.",
      open: false,
      idx: 4,
    },
    {
      title: "OKX’te kripto al-sat işlemleri nasıl yapılır?",
      text: "OKX kullanıcıları Bitcoin, Ethereum ve diğer kripto paralarda işlem yapmak için Spot, Vadeli İşlemler, Marjin ve Opsiyonlar işlemleri gibi çeşitli seçeneklerden yararlanabilirler! OKX’te al-sat stratejilerinizin bir parçası olarak Al-sat botları ve copy trade işlemlerinden de yararlanabilirsiniz.",
      open: false,
      idx: 5,
    },
  ];

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 items={items} />
    </>
  );
}
