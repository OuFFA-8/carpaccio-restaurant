import { Injectable } from '@angular/core';

export interface Category {
  id: string;
  ar: string;
  it: string;
  img: string;
}

export interface MenuItem {
  id: string;
  categoryId: string; // ربط الطبق بالقسم
  ar: string;
  it: string;
  price: string;
  img: string;
  description: string;
  isSignature: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MenuServices {
  // fullMenu = [
  //   // --- قسم الفطور (5 أطباق) ---

  //   // --- قسم الشوربات (5 أطباق) ---
  //   {
  //     id: 'soup-hamousta',
  //     categoryId: 'شوربات // Zuppa Signature',
  //     it: 'Kibbeh Hamousta',
  //     ar: 'كبة حاموستا (توقيع كرباتشيو)',
  //     price: '39',
  //     img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
  //     description:
  //       'كبة سميد محشوة بلحم اسادو مدخن فاخر، مطهوة في شوربة كرفس حامضة لتجربة مذاق فريدة تجمع بين الأصالة والابتكار.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'soup-beetroot',
  //     categoryId: 'شوربات // Zuppa Signature',
  //     it: 'Beetroot Kibbeh Soup',
  //     ar: 'شوربة كبة البنجر',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1547592115-464879f90264?q=80&w=1974',
  //     description:
  //       'كبة سميد فاخرة تقدم في شوربة بنجر صحية وغنية، تتميز بلونها الزاهي ونكهتها الفريدة التي تضفي لمسة من الحيوية على مائدتك.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'soup-lentil',
  //     categoryId: 'شوربات // Zuppa Signature',
  //     it: 'Lentil Soup',
  //     ar: 'شوربة عدس على طريقة كرباتشيو',
  //     price: '29',
  //     img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071', // استبدلها بصورة شوربة عدس
  //     description:
  //       'الشوربة التقليدية بلمسة كرباتشيو الخاصة، محضرة من أجود أنواع العدس والبهارات العطرية لتمنحك الدفء والمذاق الأصيل.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'soup-vegetable',
  //     categoryId: 'شوربات // Zuppa Signature',
  //     it: 'Vegetable Soup',
  //     ar: 'شوربة خضار',
  //     price: '19',
  //     img: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1974',
  //     description:
  //       'مزيج طازج من خضروات الموسم المطهوة بعناية في مرق غني بالنكهات الطبيعية، خيار صحي وخفيف.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'soup-seafood',
  //     categoryId: 'شوربات // Zuppa Signature',
  //     it: 'Seafood Soup',
  //     ar: 'شوربة فواكه البحر',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=1974',
  //     description:
  //       'تشكيلة فاخرة من ثمار البحر (جمبري، كلماري، وبلح البحر) مطهوة في مرق غني بالكريمة والأعشاب الإيطالية لتجربة بحرية لا تُنسى.',
  //     isSignature: true,
  //   },
  //   // --- المقبلات الباردة (Antipasti Freddi) ---
  //   {
  //     id: 'antipasti-beef-carpaccio',
  //     categoryId: 'المقبلات الباردة // Antipasti Freddi',
  //     it: 'Beef Fillet Carpaccio',
  //     ar: 'كرباتشيو فيليه العجل',
  //     price: '39',
  //     img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070', // صورة توضيحية لشرائح اللحم الرفيعة
  //     description:
  //       'فيليه عجل نيء معتق على الطريقة الإيطالية الأصلية؛ شرائح رفيعة جداً من لحم العجل المعتق تقدم مع جبنة البارميزان الفاخرة وأوراق الجرجير الطازجة، مع لمسة غنية من زيت الزيتون البكر.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'antipasti-tuna-carpaccio',
  //     categoryId: 'المقبلات الباردة // Antipasti Freddi',
  //     it: 'Red Tuna Carpaccio',
  //     ar: 'كرباتشيو التونا الحمراء',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=2070', // صورة تونا حمراء فاخرة
  //     description:
  //       'تونا حمراء فاخرة من أجود الأنواع، معدة بتتبيلة مطعم كرباتشيو السرية، تقدم مع صوص الثوم الكريمي والأعشاب العطرية التي تبرز نكهة البحر.',
  //     isSignature: true,
  //   },
  //   // --- المقبلات الساخنة (Antipasti Caldi) ---
  //   {
  //     id: 'hot-antipasti-portobello',
  //     categoryId: 'المقبلات الساخنة // Antipasti Caldi',
  //     it: 'Portobello con Crema di Salmone',
  //     ar: 'فطر بورتوبيلو بكريم السلمون',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070',
  //     description:
  //       'فطر بورتوبيلو مشوي ومحشي بالسلمون المدخن وجبنة الريكوتا المميزة، يقدم مع صوص بيانكا كريمي ومتبل بالأعشاب الطازجة.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'hot-antipasti-shrimp',
  //     categoryId: 'المقبلات الساخنة // Antipasti Caldi',
  //     it: 'Gamberi Black Tiger Piccante',
  //     ar: 'جمبري بلاك تايجر الحار بالكزبرة',
  //     price: '44',
  //     img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974',
  //     description:
  //       'جمبري طازج مشوي على الجريل ومغطى بميرنادا الشطة والكزبرة، ليمنحك مذاقاً آسيوياً إيطالياً مميزاً وفريداً.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'hot-antipasti-focaccia-colazione',
  //     categoryId: 'المقبلات الساخنة // Antipasti Caldi',
  //     it: 'Focaccia Colazione',
  //     ar: 'فوكاتشا كلازيون',
  //     price: '28',
  //     img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2070',
  //     description:
  //       'فوكاتشا إيطالية تقليدية، معطرة بالثوم وإكليل الجبل الطازج، تقدم مع تشكيلة من المازات الإيطالية الأصيلة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'hot-antipasti-filo-fig',
  //     categoryId: 'المقبلات الساخنة // Antipasti Caldi',
  //     it: 'Filo di Fichi e Feta',
  //     ar: 'فيلو التين وجبن الفيتا',
  //     price: '42',
  //     img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1974',
  //     description:
  //       'تين موسمي طازج يقدم مع جبن الفيتا المالح، مغلفان بعجينة الفيلو المقرمشة ومزين بصوص الكراميل اللذيذ.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'hot-antipasti-pastilla',
  //     categoryId: 'المقبلات الساخنة // Antipasti Caldi',
  //     it: 'Pastilla Marocchina',
  //     ar: 'الباستيا المغربية',
  //     price: '44',
  //     img: 'https://images.unsplash.com/photo-1644704078423-7a91512f4b30?q=80&w=1974',
  //     description:
  //       'عجينة مغربية رقيقة ومقرمشة محشوة بلحم متبل ببهارات كرباتشيو ومقلية بالزيت، بالإضافة إلى الفواكة المجففة والقرفة والسكر الناعم لمزيج حلو ومالح مثالي.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'hot-antipasti-focaccia-caprese',
  //     categoryId: 'المقبلات الساخنة // Antipasti Caldi',
  //     it: 'Focaccia Caprese',
  //     ar: 'فوكاتشا كابريزة',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076',
  //     description:
  //       'فوكاتشا طابون طازجة من فرن كرباتشيو المميز، تغطى بالطماطم الطازجة وجبنة الموزيريلا الكريمية وأوراق الريحان مع رشة من زيت الزيتون البكر.',
  //     isSignature: false,
  //   },
  //   // --- المطبخ الإيطالي (Cucina Italiana) ---
  //   {
  //     id: 'pasta-ravioli',
  //     categoryId: 'المطبخ الإيطالي // Cucina Italiana',
  //     it: 'Ravioli ai Quattro Formaggi',
  //     ar: 'رافيولي الأجبان',
  //     price: '64',
  //     img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
  //     description:
  //       'أصابع الرافيولي المحشوة بمزيج غني من أربعة أجبان إيطالية فاخرة (موتزيريلا، بارميزان، ريكوتا، فيتا) تقدم مع صوص روزيه كريمي يذوب في الفم.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'pasta-fettuccine',
  //     categoryId: 'المطبخ الإيطالي // Cucina Italiana',
  //     it: 'Fettuccine Cocorico',
  //     ar: 'فيتوتشيني كوكوريكو',
  //     price: '72',
  //     img: 'https://images.unsplash.com/photo-1645112481338-69067b884d73?q=80&w=2070',
  //     description:
  //       'فيتوتشيني طازجة تقدم مع قطع صدر الدجاج المشوية على الجريل مع صوص بيانكا الأبيض وشرائح الفطر الطازج.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'pasta-thai-noodles',
  //     categoryId: 'المطبخ الإيطالي // Cucina Italiana',
  //     it: 'Noodles Thailandesi',
  //     ar: 'نودلز تايلندي',
  //     price: '49',
  //     img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964',
  //     description:
  //       'نودلز آسيوية مقلية على الطريقة التايلندية مع خضار طازجة وصوص غني بنكهة الصويا والليمون، بلمسة توازن مثالية بين الحلو والحامض.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'pasta-bolognese',
  //     categoryId: 'المطبخ الإيطالي // Cucina Italiana',
  //     it: 'Pasta alla Bolognese',
  //     ar: 'باستا بولونيز',
  //     price: '49',
  //     img: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070',
  //     description:
  //       'باستا إيطالية كلاسيكية تُقدَّم مع صوص بولونيز الشهير المحضر من اللحم المفروم الطازج والطماطم العطرية والأعشاب الإيطالية.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'pasta-pesto',
  //     categoryId: 'المطبخ الإيطالي // Cucina Italiana',
  //     it: 'Penne al Pesto',
  //     ar: 'بيني بيستو',
  //     price: '49',
  //     img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994',
  //     description:
  //       'مكرونة بيني ممزوجة بصوص البيستو الإيطالي الطازج المحضّر من الريحان، الصنوبر، زيت الزيتون، وجبنة البارميزان المعتقة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-chicken',
  //     categoryId: 'إضافات // Extra',
  //     it: 'Petto di Pollo Grigliato',
  //     ar: 'إضافة صدر دجاج مشوي',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1632778149975-420e0e75ee0d?q=80&w=2070',
  //     description: 'صدر دجاج مشوي متبل بالأعشاب، يمكن إضافته لأي طبق باستا حسب رغبتك.',
  //     isSignature: false,
  //   },
  //   // --- الأطباق الرئيسية (Piatti Principali) ---
  //   {
  //     id: 'main-chicken-stroganoff',
  //     categoryId: 'الأطباق الرئيسية // Piatti Principali',
  //     it: 'Pollo alla Stroganoff',
  //     ar: 'دجاج استروجونوف',
  //     price: '68',
  //     img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070',
  //     description:
  //       'صدر دجاج طري مطهو بصوص كريمي غني بالمشروم والأعشاب العطرية، يقدم مع الأرز الأبيض الناصع. طبق كلاسيكي بلمسة كرباتشيو الخاصة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'main-lamb-chops',
  //     categoryId: 'الأطباق الرئيسية // Piatti Principali',
  //     it: 'Costolette di Agnello Verona',
  //     ar: 'ريش خاروف فيرونا',
  //     price: '118',
  //     img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070',
  //     description:
  //       'ريش خاروف طرية بوزن 450غم ومتبلة بعناية ومشوية ببراعة، تقدم مع بيوريه الخضار الناعم وتشكيلة من الخضار الموسمية المشوية.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'main-kebab-taboon',
  //     categoryId: 'الأطباق الرئيسية // Piatti Principali',
  //     it: 'Kebab al Forno Taboon',
  //     ar: 'فخارة كباب بالطابون',
  //     price: '88',
  //     img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
  //     description:
  //       'كباب فاخر من لحم العجل الطازج بالإضافة إلى الصنوبر والكستناء على صوص الاسكندر، يخبز مع خبز الطابون الطازج من فرن كرباتشيو مع الخضار المشوية.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'main-grill-mix-380',
  //     categoryId: 'الأطباق الرئيسية // Piatti Principali',
  //     it: 'Grigliata Mista Gerosolimitana (Piccolo)',
  //     ar: 'مشكل مشاوي مقدسي (380 غرام)',
  //     price: '88',
  //     img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974',
  //     description:
  //       'تشكيلة فاخرة لشخص واحد (كباب، صدر دجاج، ريش خاروف، انتلايكوت) على الجريل 380 غرام محضرة بأسلوب مقدسي أصيل، تقدم مع الطحينة وصوص التشيميتشوري.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'main-grill-mix-750',
  //     categoryId: 'الأطباق الرئيسية // Piatti Principali',
  //     it: 'Grigliata Mista Gerosolimitana (Grande)',
  //     ar: 'مشكل مشاوي مقدسي (750 غرام)',
  //     price: '154',
  //     img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1935',
  //     description:
  //       'تشكيلة فاخرة لشخصين (كباب، صدر دجاج، ريش خاروف، انتلايكوت) على الجريل 750 غرام محضرة بأسلوب مقدسي أصيل، تقدم مع الطحينة الغنية وصوص التشيميتشوري المنعش.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'main-carpaccio-burger',
  //     categoryId: 'الأطباق الرئيسية // Piatti Principali',
  //     it: 'Carpaccio Burger Speciale',
  //     ar: 'برغر كرباتشو',
  //     price: '54',
  //     img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899',
  //     description:
  //       'برغر عجل فاخر بوزن 200غ، محضر من أجود أنواع اللحم يُقدم في خبز طازج مع شرائح البطاطا الودجز المقرمشة.',
  //     isSignature: false,
  //   },
  //   // --- مطبخ الشيف (Chef's Signature Kitchen) ---
  //   {
  //     id: 'chef-entrecote-argentine',
  //     categoryId: "مطبخ الشيف // Chef's Signature",
  //     it: 'Entrecôte Argentina Invecchiata',
  //     ar: 'أنتريكوت أرجنتيني معتق',
  //     price: '124',
  //     img: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974',
  //     description:
  //       'قطعة فاخرة بوزن 300 غم من لحم الانتريكوت الأرجنتيني المعتق بعناية، تقدم مع بطاطا مشوية، خضار سوتيه طازجة وصوص بورتوبيلو الغني.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'chef-entrecote-wagyu',
  //     categoryId: "مطبخ الشيف // Chef's Signature",
  //     it: 'Wagyu Argentino Speciale',
  //     ar: 'أنتريكوت واجيو أرجنتيني معتق',
  //     price: '159',
  //     img: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2070',
  //     description:
  //       'تجربة الرفاهية القصوى مع لحم الواجيو الأرجنتيني المعتق، يتميز بالرخامية العالية والمذاق الذي يذوب في الفم، محضر بأسلوب الشيف الخاص.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'chef-fillet-medallions',
  //     categoryId: "مطبخ الشيف // Chef's Signature",
  //     it: 'Medaglioni di Filetto di Vitello',
  //     ar: 'مداليات فيليه العجل',
  //     price: '134',
  //     img: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2062',
  //     description:
  //       'مداليات فيليه عجل معتق وطرية بوزن 300 غم، مُعدة ببراعة ومقدمة مع صوص الخردل الفرنسي الكلاسيكي لمذاق يجمع بين الرقي والأصالة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'chef-chicken-steak',
  //     categoryId: "مطبخ الشيف // Chef's Signature",
  //     it: 'Bistecca di Pollo Grigliata',
  //     ar: 'ستيك صدر الدجاج',
  //     price: '74',
  //     img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913',
  //     description:
  //       'صدر دجاج مشوي باحترافية، يُقدم مع بيوريه الجرجير المنعش وصوص زبدة الليمون الحمضي، لتجربة طعام مغذية وخفيفة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'chef-volostir-carpaccio',
  //     categoryId: "مطبخ الشيف // Chef's Signature",
  //     it: 'Volostir Carpaccio di Pollo',
  //     ar: 'فولوستير كرباتشو',
  //     price: '88',
  //     img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070',
  //     description:
  //       'طبق دجاج ومشروم فاخر، يُطهى بكريمة الصويا الغنية والبصل المكرمل، ليقدم مذاقاً متوازناً بين الحلو والمالح يذوب في الفم.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'chef-chicken-parmiggiana',
  //     categoryId: "مطبخ الشيف // Chef's Signature",
  //     it: 'Pargiot di Pollo',
  //     ar: 'برجيوت دجاج',
  //     price: '59',
  //     img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070',
  //     description:
  //       'أفخاذ الدجاج المشوية (البرجيوت) بتتبيلة كرباتشيو الخاصة، تقدم بأسلوب عصري يحافظ على طراوة اللحم ونكهته الأصلية.',
  //     isSignature: false,
  //   },
  //   // --- أطباق السمك والبحر (Pesce and More) ---
  //   {
  //     id: 'fish-barramundi',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Filetto di Barramundi in Crosta',
  //     ar: 'فيليه براموندي بالكريكر الفرنسي',
  //     price: '98',
  //     img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070',
  //     description:
  //       'فيليه براموندي طازج مغلف بالكريكر الفرنسي المقرمش ومشوي بالفرن بعناية، يقدم مع خضار سوتيه طازجة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'fish-denis-parisian',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Filetto di Orata alla Parigina',
  //     ar: 'فيليه دنيس بارازيان',
  //     price: '108',
  //     img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=2070',
  //     description:
  //       'فيليه دنيس مشوي بتتبيلة الثوم والأعشاب والليمون المنعشة، يقدم مع بطاطا سوتيه وخضار سوتيه.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'fish-salmon-papillote',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Salmone Norvegese al Cartoccio',
  //     ar: 'سلمون نرويجي بابيونا',
  //     price: '98',
  //     img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974',
  //     description:
  //       'سلمون نرويجي فاخر مخبوز في فرن الطابون بتقنية البابيونا مع طماطم مجففة وريحان، يقدم مع بطاطا بيوريه ناعمة.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'fish-labrak-fried',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Spigola Intera Fritta',
  //     ar: 'سمك لبراك كامل مقلي',
  //     price: '118',
  //     img: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070',
  //     description:
  //       'سمكة لبراك (سيباس) كاملة مقلية بتتبيلة كرباتشو الخاصة المقرمشة، لمحبي المذاق البحري الأصيل.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'fish-shrimp-black-tiger',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Gamberi Black Tiger al Burro',
  //     ar: 'جمبري بلاك تايجر بصوص الزبدة',
  //     price: '98',
  //     img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974',
  //     description:
  //       'جمبري بلاك تايجر الفاخر مطهو بصوص زبدة بذور البندورة والزعتر البري لمذاق غني وعميق.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'fish-royal-plate',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Piatto Reale dello Chef (2 Pers.)',
  //     ar: 'بلاطة الشيف الملكية (لشخصين)',
  //     price: '248',
  //     img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1854',
  //     description:
  //       'تشكيلة فاخرة جداً وحصرية من فواكه البحر والأسماك المختارة، تقدم بأسلوب ملكي يكفي لشخصين.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'fish-seafood-pot',
  //     categoryId: 'أطباق السمك والبحر // Pesce and More',
  //     it: 'Terracotta di Frutti di Mare al Cocco',
  //     ar: 'فخارة فواكه البحر بجوز الهند',
  //     price: '118',
  //     img: 'https://images.unsplash.com/photo-1534080564607-c9295478493b?q=80&w=2070',
  //     description:
  //       'مزيج من فواكه البحر (جمبري، كلماري، بلح البحر) مع خضار بصوص كريمة جوز الهند والأعشاب، تطهى في الفخار لتركيز النكهات.',
  //     isSignature: true,
  //   },
  //   // --- قسم السلطات (Insalate) ---
  //   {
  //     id: 'salad-la-carpaccio',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata La Carpaccio',
  //     ar: 'سلطة لا كرباتشو',
  //     price: '48',
  //     img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070',
  //     description:
  //       'مكس من الأعشاب العطرية الطازجة، برغل، مكس مكسرات (كاشيو، فستق حلبي، لوز، فول سوداني)، حوامض، ستروبري، صوص زيت الزيتون والليمون مع خل البلسميك والتوابل الخاصة.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'salad-sicilia',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata Sicilia',
  //     ar: 'سلطة سيسيليا',
  //     price: '48',
  //     img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1968',
  //     description:
  //       'البطاطا الحلوة المشوية مع البنجر والكولورابي والخيار على ميكس الخس والجرجير بصوص سيتسيليا المميز ومبروش جبنة الفيتا.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'salad-pomodorini',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata di Pomodorini',
  //     ar: 'سلطة بومودوريني',
  //     price: '48',
  //     img: 'https://images.unsplash.com/photo-1592417817098-8f3b6be00d86?q=80&w=1974',
  //     description:
  //       'بندورة الشيري الكرزية الإيطالية وزيتون الكلماتا اليوناني مع صوص البيستو العطري، وجبنة البرينزاه المبروشة مع زيت الزيتون الصافي.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'salad-endive',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata di Indivia',
  //     ar: 'سلطة الإنديف الإيطالية',
  //     price: '58',
  //     img: 'https://images.unsplash.com/photo-1515544867661-3044d85c3cb9?q=80&w=1974',
  //     description:
  //       'خس فريسكو، خسة عربية، جرجير، خيار، بصل أحمر وبندورة شيري بصوص الأنديف الإيطالي، مغلفة بخسة الأنديف المميزة مع جبن البارميزان ومعجون البيستو.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'salad-black-forest',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata Foresta Nera',
  //     ar: 'سلطة الغابة السوداء',
  //     price: '58',
  //     img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070',
  //     description:
  //       '3 أنواع من الفطر الفاخر (شامبينون، بورتوبيلو، والياعر) مطهوة مع بندورة الشيري والريحان بصوص كريم الصويا والترياكي، تقدم على أوراق الخس فريسكو الإيطالي.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'salad-pastore',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata del Pastore',
  //     ar: 'سلطة الراعي باستوريه',
  //     price: '58',
  //     img: 'https://images.unsplash.com/photo-1505253716362-afaba1d3241f?q=80&w=1974',
  //     description:
  //       'قطع من جبن الغنم وجبن الحلومي المقلي مغلف بالبانكو والقرشلة، على مكس من الخضار الطازجة، بصل أحمر وخبز محمص بصوص الباستوريه الإيطالي الفاخر.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'salad-quinoa',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata di Quinoa',
  //     ar: 'سلطة الكينواه',
  //     price: '48',
  //     img: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1974',
  //     description:
  //       'كينواه مطهوة مع قطع التفاح والستروبري والأعشاب الطازجة، تقدم بصوص البرتقال المنعش.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'salad-caesar',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Insalata Caesar Classica',
  //     ar: 'سلطة سيزر كلاسيك',
  //     price: '35',
  //     img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070',
  //     description: 'لب الخس الطازج مع الخبز المحمص وجبن البارميزان مع صوص السيزر الأصلي.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'salad-extra-chicken',
  //     categoryId: 'إضافات // Extra',
  //     it: 'Pollo alla Griglia Extra',
  //     ar: 'إضافة صدر دجاج مشوي للسلطة',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1632778149975-420e0e75ee0d?q=80&w=2070',
  //     description: 'صدر دجاج مشوي متبل لإضافته على أي نوع سلطة مختار.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'salad-buffet',
  //     categoryId: 'السلطات // Insalate',
  //     it: 'Assortimento di Insalate (12 Tipi)',
  //     ar: 'تشكيلة سلطات كرباتشو (12 نوع)',
  //     price: '45',
  //     img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053',
  //     description:
  //       'تشكيلة فاخرة من 12 نوع سلطة طازجة تحضر يومياً، يشمل إعادة التعبئة (Refill) عند طلب وجبة رئيسية.',
  //     isSignature: true,
  //   },
  //   // --- وجبات الأطفال (Menu per Bambini) ---
  //   {
  //     id: 'kids-pizza-margherita',
  //     categoryId: 'وجبات الأطفال // Menu per Bambini',
  //     it: 'Pizza Margherita per Bambini',
  //     ar: 'بيتزا مارجيريتا للأطفال',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=2070',
  //     description:
  //       'بيتزا إيطالية بعجينة رقيقة محضرة خصيصاً للأطفال مع صلصة الطماطم الطبيعية وجبنة الموتزيريلا الغنية والريحان.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'kids-schnitzel-chips',
  //     categoryId: 'وجبات الأطفال // Menu per Bambini',
  //     it: 'Schnitzel di Pollo e Patatine',
  //     ar: 'أصابع شنيتسل وشيبس',
  //     price: '44',
  //     img: 'https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=2070',
  //     description:
  //       'أصابع دجاج مقرمشة محضرة من صدر الدجاج الطازج، تقدم مع أصابع البطاطا المقلية الذهبية.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'kids-chicken-chips',
  //     categoryId: 'وجبات الأطفال // Menu per Bambini',
  //     it: 'Straccetti di Pollo e Patatine',
  //     ar: 'شرائح صدر الدجاج وشيبس',
  //     price: '44',
  //     img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070',
  //     description: 'شرائح صدر دجاج مشوية خفيفة وصحية، تقدم مع البطاطا المقلية المقرمشة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'kids-penne-napolitana',
  //     categoryId: 'وجبات الأطفال // Menu per Bambini',
  //     it: 'Penne alla Napoletana',
  //     ar: 'بيني نابوليتانا',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
  //     description:
  //       'مكرونة بيني إيطالية تقدم مع صلصة الطماطم الكلاسيكية المحضرة من الطماطم الطازجة والأعشاب الهادئة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'kids-mini-burger',
  //     categoryId: 'وجبات الأطفال // Menu per Bambini',
  //     it: 'Mini Burger Classico (150g)',
  //     ar: 'برغر ميني 150 غم',
  //     price: '39',
  //     img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1780',
  //     description:
  //       'برغر عجل صغير (150غم) محضر بأسلوب كرباتشيو، يقدم في خبز طري ومناسب للأطفال مع البطاطا.',
  //     isSignature: false,
  //   },
  //   // --- قسم الإضافات (Contorni) ---
  //   {
  //     id: 'extra-chips',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Patatine Fritte',
  //     ar: 'شيبس',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1573015084184-3ce2af99b748?q=80&w=2070',
  //     description: 'أصابع البطاطا المقلية الذهبية والمقرمشة، تقدم ساخنة مع الملح.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-wedges',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Patate Wedges',
  //     ar: 'بطاطا ودجز',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1524338198850-8a2ff63a6372?q=80&w=1974',
  //     description: 'قطع بطاطا ودجز سميكة متبلة بالأعشاب ومحمرة في الفرن.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-puree',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Purè di Patate',
  //     ar: 'بطاطا بيوريه (مهروسة)',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974',
  //     description: 'بطاطا مهروسة ناعمة محضرة بالزبدة والكريمة بلمسة كرباتشيو.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-sauté',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Verdure Sauté',
  //     ar: 'خضار سوتيه',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1534939561126-72194c224753?q=80&w=1974',
  //     description: 'تشكيلة من خضروات الموسم الطازجة المطهوة على البخار مع القليل من زيت الزيتون.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-hummus',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Piatto di Hummus',
  //     ar: 'صحن حمص',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1541518763669-27f9044d8ad8?q=80&w=2070',
  //     description: 'حمص كريمي أصيل محضر بالطريقة التقليدية مع زيت الزيتون البكر.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-rice',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Piatto di Riso',
  //     ar: 'صحن أرز',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1974',
  //     description: 'أرز أبيض ناصع مطهو بإتقان ليناسب الأطباق الرئيسية.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-hummus-meat',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Hummus con Carne',
  //     ar: 'حمص مع لحمة',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1577906030558-841f30869639?q=80&w=2070',
  //     description: 'حمص كريمي مغطى بقطع لحم العجل المفروم والمتبل والمحمص مع الصنوبر.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'extra-kibbeh-4',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Kibbeh (4 Pezzi)',
  //     ar: 'كبة (4 حبات)',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1628103120155-7096c646006e?q=80&w=2070',
  //     description: 'حبات الكبة المقلية المحشوة باللحم والمكسرات، تقدم مقرمشة وساخنة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'extra-kibbeh-pomegranate',
  //     categoryId: 'إضافات // Contorni',
  //     it: 'Kibbeh alla Griglia con Melograno',
  //     ar: 'كبة مشوية مع دبس الرمان',
  //     price: '28',
  //     img: 'https://images.unsplash.com/photo-1628103120155-7096c646006e?q=80&w=2070', // يفضل صورة للكبة المشوية
  //     description: 'كبة مشوية على الفحم ومغطاة بصوص دبس الرمان الحامض والحلو لتجربة فريدة.',
  //     isSignature: true,
  //   },
  //   // --- قسم الحلويات (Dolci) ---
  //   {
  //     id: 'dessert-lemon-pie',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Tarte au Citron Français',
  //     ar: 'باي الليمون الفرنسي',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1974',
  //     description:
  //       'تارت الليمون الفرنسي المنعش، يتميز بتوازن الحموضة والحلاوة، يقدم مع سكوب بوظة فانيلا فاخرة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'dessert-apple-almond',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Tarte Aux Pommes et Amandes',
  //     ar: 'باي التفاح واللووز الفرنسي',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1535927844539-9eec3b976b0b?q=80&w=2070',
  //     description:
  //       'تارت التفاح الفرنسي التقليدي مع شرائح اللوز المحمصة، يقدم دافئاً مع سكوب من بوظة الفانيلا.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'dessert-tiramisu',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Tiramisù Classico Italiano',
  //     ar: 'تيراميسو إيطالي',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974',
  //     description:
  //       'الحلوى الإيطالية الأشهر؛ طبقات من بسكويت ليدي فينجر المغموس في القهوة مع كريمة الماسكاربوني الغنية ورشة كاكاو.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'dessert-ferrero',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Sinfonia di Ferrero Rocher',
  //     ar: 'فيريرو روشيه',
  //     price: '42',
  //     img: 'https://images.unsplash.com/photo-1548907040-4baa4335804b?q=80&w=1974',
  //     description:
  //       'كيكة الشوكولاتة الغنية بنكهة البندق والفريروشيه، مغطاة بطبقة مقرمشة من الشوكولاتة الفاخرة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'dessert-bounty',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Bounty al Cocco',
  //     ar: 'باونتي جوز الهند',
  //     price: '38',
  //     img: 'https://images.unsplash.com/photo-1590089415225-403ed3f96ca2?q=80&w=1974',
  //     description:
  //       'مزيج رائع بين جوز الهند الكريمي والشوكولاتة الداكنة، يقدم بأسلوب كرباتشيو العصري.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'dessert-tricolade',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Mousse Tricolade',
  //     ar: 'موس تريكولاد',
  //     price: '42',
  //     img: 'https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=1974',
  //     description:
  //       'ثلاث طبقات من موس الشوكولاتة (البيضاء، وبالحليب، والداكنة) لتجربة غنية لعشاق الشوكولاتة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'dessert-kokilida',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Kokilida Austriaca',
  //     ar: 'كوكيليدا نمساوية',
  //     price: '44',
  //     img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978',
  //     description:
  //       'من قلب المطبخ النمساوي، حلوى مميزة تجمع بين القوام الهش والحشوة الغنية بنكهة فريدة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'dessert-vanilla-forest',
  //     categoryId: 'الحلويات // Dolci',
  //     it: 'Foresta di Vaniglia Italiana',
  //     ar: 'غابة الفانيلا الإيطالية',
  //     price: '39',
  //     img: 'https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=80&w=2071',
  //     description:
  //       'مزيج من كريمة الفانيلا الإيطالية الفاخرة مع ثمار الغابة الحمراء وصوص التوت البري.',
  //     isSignature: false,
  //   },
  //   // --- قسم المشروبات (Bevande) ---

  //   // 1- كوكتيلات كرباتشو الخاصة (32 - 34)
  //   {
  //     id: 'drink-miami',
  //     categoryId: 'مشروبات // الكوكتيلات',
  //     it: 'Miami Cocktail',
  //     ar: 'كوكتيل ميامي',
  //     price: '32',
  //     img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974',
  //     description: 'مزيج منعش من التفاح، البطيخ، الأناناس، والنعنع الطازج.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-dubai',
  //     categoryId: 'مشروبات // الكوكتيلات',
  //     it: 'Dubai Cocktail',
  //     ar: 'كوكتيل دبي',
  //     price: '32',
  //     img: 'https://images.unsplash.com/photo-1544145945-f904253ed0ad?q=80&w=1974',
  //     description: 'كوكتيل فاخر يجمع بين الفستق الحلبي، الشوكولاتة، ولمسة من شعر الكنافة المقرمشة.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'drink-carpaccio-spec',
  //     categoryId: 'مشروبات // الكوكتيلات',
  //     it: 'Carpaccio Special Shake',
  //     ar: 'كوكتيل كرباتشو خاص',
  //     price: '34',
  //     img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974',
  //     description: 'مزيج طاقة من الموز، البيكان، النوتيلا والمكسرات المحمصة.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'drink-picolada',
  //     categoryId: 'مشروبات // الكوكتيلات',
  //     it: 'Pincolada Specia',
  //     ar: 'كوكتيل بينكولادا',
  //     price: '32',
  //     img: 'https://images.unsplash.com/photo-1545244912-07640984024b?q=80&w=1974',
  //     description: 'خلطة كرباتشو من الليمون، جوز الهند، الأناناس والتفاح.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-passion',
  //     categoryId: 'مشروبات // الكوكتيلات',
  //     it: 'Passiflora & Mango Mix',
  //     ar: 'كوكتيل باسفلورا',
  //     price: '32',
  //     img: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1974',
  //     description: 'مزيج استوائي من المانجا، الباسفلورا والشمام.',
  //     isSignature: false,
  //   },

  //   // 2- عصائر طبيعية (24 - 28)
  //   {
  //     id: 'drink-orange',
  //     categoryId: 'مشروبات // عصائر طبيعية',
  //     it: "Spremuta d'Arancia",
  //     ar: 'برتقال طبيعي',
  //     price: '24',
  //     img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1974',
  //     description: 'عصير برتقال طازج معصور يدوياً عند الطلب.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-mix-juice',
  //     categoryId: 'مشروبات // عصائر طبيعية',
  //     it: 'Mix Carota e Arancia',
  //     ar: 'مكس جزر وبرتقال',
  //     price: '28',
  //     img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070',
  //     description: 'مزيج صحي غني بالفيتامينات من الجزر والبرتقال الطبيعي.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-detox',
  //     categoryId: 'مشروبات // عصائر طبيعية',
  //     it: 'Carpaccio Detox Mix',
  //     ar: 'خلطة كرباتشو الصحية',
  //     price: '24',
  //     img: 'https://images.unsplash.com/photo-1610970882799-64a3e1d209c0?q=80&w=1974',
  //     description: 'مزيج الديتوكس الخاص: زنجبيل، كرفس، وبنجر.',
  //     isSignature: true,
  //   },

  //   // 3- موهيتو (24 - 28)
  //   {
  //     id: 'drink-mojito-berry',
  //     categoryId: 'مشروبات // موهيتو',
  //     it: 'Mojito ai Frutti di Bosco',
  //     ar: 'موهيتو توت / بلوبري',
  //     price: '24',
  //     img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974',
  //     description: 'موهيتو منعش مع قطع التوت البري والنعناع.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-mojito-xl',
  //     categoryId: 'مشروبات // موهيتو',
  //     it: 'Mojito XL e Menta',
  //     ar: 'موهيتو اكس ال ونعنع',
  //     price: '28',
  //     img: 'https://images.unsplash.com/photo-1546171753-97d7689e48aa?q=80&w=1974',
  //     description: 'طاقة إضافية مع موهيتو الإكس ال والنعناع المنعش.',
  //     isSignature: false,
  //   },

  //   // 4- ميلك شيك (26 - 28)
  //   {
  //     id: 'drink-shake-nutella',
  //     categoryId: 'مشروبات // ميلك شيك',
  //     it: 'Milkshake alla Nutella',
  //     ar: 'ميلك شيك نوتيلا',
  //     price: '26',
  //     img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974',
  //     description: 'ميلك شيك كريمي غني بشوكولاتة نوتيلا الأصلية.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-shake-signature',
  //     categoryId: 'مشروبات // ميلك شيك',
  //     it: 'Carpaccio Signature Shake',
  //     ar: 'كرباتشو سيغنتشر شيك',
  //     price: '28',
  //     img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974',
  //     description: 'إصدار الشيف الخاص من الميلك شيك بمكونات سرية.',
  //     isSignature: true,
  //   },

  //   // 5- مشروبات ساخنة (12 - 22)
  //   {
  //     id: 'drink-cappuccino-lg',
  //     categoryId: 'مشروبات // ساخنة',
  //     it: 'Cappuccino Grande',
  //     ar: 'كابتشينو كبير',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1974',
  //     description: 'قهوة إيطالية غنية مع رغوة الحليب الكثيفة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-espresso-dbl',
  //     categoryId: 'مشروبات // ساخنة',
  //     it: 'Espresso Doppio',
  //     ar: 'اسبرسو دبل',
  //     price: '14',
  //     img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070',
  //     description: 'جرعة مضاعفة من القهوة الإيطالية المركزة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'drink-sahlab',
  //     categoryId: 'مشروبات // ساخنة',
  //     it: 'Sahlab con Frutta Secca',
  //     ar: 'سحلب بالمكسرات',
  //     price: '18',
  //     img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1974',
  //     description: 'مشروب السحلب الدافئ المزين بالقرفة والمكسرات وجوز الهند.',
  //     isSignature: false,
  //   },
  //   // --- قسم الآيس كريم (Gelato) ---
  //   {
  //     id: 'gelato-1-scoop',
  //     categoryId: 'الحلويات // Gelato',
  //     it: 'Una Pallina di Gelato',
  //     ar: 'سكوب آيس كريم واحد',
  //     price: '12',
  //     img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=1974',
  //     description: 'اختر نكهتك المفضلة من تشكيلة الآيس كريم الإيطالية الطازجة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'gelato-2-scoops',
  //     categoryId: 'الحلويات // Gelato',
  //     it: 'Due Palline di Gelato',
  //     ar: 'سكوبين آيس كريم',
  //     price: '22',
  //     img: 'https://images.unsplash.com/photo-1505394033343-e386791bd9d3?q=80&w=1974',
  //     description: 'مزيج من نكهتين من اختيارك من الجيلاتو الإيطالي الفاخر.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'gelato-3-scoops',
  //     categoryId: 'الحلويات // Gelato',
  //     it: 'Tre Palline di Gelato',
  //     ar: 'ثلاث سكوبات آيس كريم',
  //     price: '32',
  //     img: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?q=80&w=1974',
  //     description: 'التجربة الكاملة: ثلاث سكوبات من الآيس كريم بنكهات متنوعة حسب اختيارك.',
  //     isSignature: true,
  //   },
  //   // --- قسم الأراجيل (Hookah / Shisha) ---
  //   {
  //     id: 'shisha-carpaccio',
  //     categoryId: 'أراجيل // Hookah',
  //     it: 'Narghilè Carpaccio Special',
  //     ar: 'أرجيلة كرباتشيو المميزة',
  //     price: '45',
  //     img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974', // صورة أرجيلة فخمة
  //     description: 'أرجيلة كرباتشيو الخاصة بخلطاتنا السرية وتجهيز احترافي لأفضل تجربة استرخاء.',
  //     isSignature: true,
  //   },
  //   {
  //     id: 'shisha-nakhla',
  //     categoryId: 'أراجيل // Hookah',
  //     it: 'Doppia Mela Nakhla',
  //     ar: 'تفاحتين نخلة',
  //     price: '40',
  //     img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
  //     description: 'النكهة التقليدية الأصلية من تفاحتين نخلة الشهيرة.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'shisha-mazaya',
  //     categoryId: 'أراجيل // Hookah',
  //     it: 'Doppia Mela Mazaya',
  //     ar: 'تفاحتين مزايا',
  //     price: '40',
  //     img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
  //     description: 'نكهة التفاحتين من مزايا بلمسة عصرية وكثافة دخان عالية.',
  //     isSignature: false,
  //   },
  //   {
  //     id: 'shisha-flavors-30',
  //     categoryId: 'أراجيل // Hookah',
  //     it: 'Varietà di Gusti',
  //     ar: 'أراجيل بنكهات متنوعة (ليمون، بطيخ، علكة، Love 66)',
  //     price: '30',
  //     img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
  //     description:
  //       'تشكيلة نكهات منعشة تشمل: ليمون ونعنع، بطيخ ونعنع، علكة وقرفة، وخلطة Love 66 الشهيرة.',
  //     isSignature: false,
  //   },
  // ];

  // constructor() {}

  // // دالة لجلب المنيو كاملة
  // getMenu(): MenuItem[] {
  //   return this.fullMenu;
  // }

  // // دالة لجلب صنف واحد بالـ ID (مهمة لصفحة التفاصيل)
  // getItemById(id: string): MenuItem | undefined {
  //   return this.fullMenu.find((item) => item.id === id);
  // }

  // 1. تعريف الأقسام (العناوين اللي هتظهر في الصفحة الرئيسية)
  categories: Category[] = [
    {
      id: 'breakfast',
      ar: 'قسم الفطور',
      it: 'Colazione',
      img: 'https://images.unsplash.com/photo-1544517175-b7143c5c2da3?q=80&w=2070',
    },
    {
      id: 'soups',
      ar: 'قسم الشوربات',
      it: 'Zuppe',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
    },
    {
      id: 'cold-appetizers',
      ar: 'المقبلات الباردة',
      it: 'Antipasti Freddi',
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
    },
    {
      id: 'hot-appetizers',
      ar: 'المقبلات الساخنة',
      it: 'Antipasti Caldi',
      img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070',
    },
    {
      id: 'italian',
      ar: 'المطبخ الإيطالي',
      it: 'Cucina Italiana',
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
    },
    {
      id: 'main',
      ar: 'الأطباق الرئيسية',
      it: 'Piatti Principali',
      img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070',
    },
    {
      id: 'chef',
      ar: 'مطبخ الشيف',
      it: "Chef's Signature",
      img: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974',
    },
    {
      id: 'seafood',
      ar: 'أطباق السمك والبحر',
      it: 'Pesce e Mare',
      img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1854',
    },
    {
      id: 'salads',
      ar: 'قسم السلطات',
      it: 'Insalate',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070',
    },
    {
      id: 'kids',
      ar: 'وجبات الأطفال',
      it: 'Menu Bambini',
      img: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=2070',
    },
    {
      id: 'extras',
      ar: 'قسم الإضافات',
      it: 'Contorni',
      img: 'https://images.unsplash.com/photo-1573015084184-3ce2af99b748?q=80&w=2070',
    },
    {
      id: 'desserts',
      ar: 'قسم الحلويات',
      it: 'Dolci',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974',
    },

    // المشروبات بفروعها (يمكنك جعلها قسم واحد كبير أو تقسيمها)
    {
      id: 'drinks-hot',
      ar: 'مشروبات ساخنة',
      it: 'Bevande Calde',
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974',
    },
    {
      id: 'drinks-cold',
      ar: 'عصائر وموهيتو',
      it: 'Succhi e Mojito',
      img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974',
    },
    {
      id: 'cocktails',
      ar: 'كوكتيلات كرباتشو',
      it: 'Carpaccio Cocktails',
      img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2057',
    },

    {
      id: 'ice-cream',
      ar: 'قسم الآيس كريم',
      it: 'Gelato',
      img: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?q=80&w=1974',
    },
    {
      id: 'shisha',
      ar: 'قسم الأراجيل',
      it: 'Arghila Lounge',
      img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
    },
  ];

  items: MenuItem[] = [
    // --- أمثلة للإفطار ---
    {
      id: 'bf-1',
      categoryId: 'breakfast',
      it: 'Carpaccio Breakfast Experience',
      ar: 'تجربة فطور كرباتشيو',
      price: '69 / 129', // السعر للشخص وللشخصين
      img: 'https://images.unsplash.com/photo-1544517175-b7143c5c2da3?q=80&w=2070', // صورة فطار ملكي
      description:
        'استمتع بتجربة افطار كرباتشيو المميزة لشخص او شخصين. تتضمن اومليت حسب الطلب او بيض عيون، سلطة شيري وأعشاب طازجة، 3 أنواع أجبان مختارة بعناية، قلاية بندورة إيطالية، 9 أنواع مشهيات فاخرة، تقدم مع خبز طابون فوكاتشا طازجة من فرن كرباتشيو، مشروب ساخن، وعصير طبيعي.',
      isSignature: true,
    },
    {
      id: 'bf-2',
      categoryId: 'breakfast',
      it: 'Verona Healthy Bowl',
      ar: 'طبق فيرونا الصحي',
      price: '49',
      img: 'https://images.unsplash.com/photo-1511690656952-34342d57a0f0?q=80&w=1964', // صورة شوفان وفواكه
      description:
        'وعاء فيرونا الصحي يأتيك مليئاً بالفواكة الموسمية الطازجة بالإضافة الى الشوفان المقرمش والجرانولا، يقدم مع لبن يوناني، عسل طبيعي، وطحينية فاخرة.',
      isSignature: false,
    },
    {
      id: 'bf-3',
      categoryId: 'breakfast',
      it: 'Pomodorino Pancake',
      ar: 'بومودورينو بانكيك',
      price: '49',
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980', // صورة بانكيك
      description:
        'بانكيك محضر طازج يومياً بلمسة كرباتشيو الخاصة، يتميز بقوام هش ولذيذ. يقدم مع سيرب الميبل الطبيعي وفواكه موسمية طازجة وصوص شوكولاتة.',
      isSignature: false,
    },
    {
      id: 'bf-4',
      categoryId: 'breakfast',
      it: 'Parisian French Toast',
      ar: 'فرنش توست باريسي',
      price: '49',
      img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547', // صورة فرنش توست
      description:
        'خبز توست الشوفان مغمس بخلطة كرباتشيو المميزة ومحمص بأجود أنواع الزبدة، يقدم مقرمش مع صوص الفراولة وعسل طبيعي.',
      isSignature: false,
    },
    {
      id: 'bf-5',
      categoryId: 'breakfast',
      it: 'Pastore Breakfast',
      ar: 'فطور باستوري',
      price: '54',
      img: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=1964', // صورة شكشوكة
      description:
        'شكشوكة كرباتشيو الخاصة مع 2 بيض عيون، زيتون، طحينية، سلطة عربية مع الأعشاب الطازجة، بالإضافة الى خبز الطابون الطازج من فرن كرباتشيو (إفطار تقليدي بلمسة عصرية).',
      isSignature: false,
    },

    // --- أمثلة للشوربات ---
    {
      id: 'soup-1',
      categoryId: 'soups', // لاحظ الربط هنا
      ar: 'كبة حاموستا',
      it: 'Kibbeh Hamousta',
      price: '39',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
      description: 'كبة سميد محشوة بلحم اسادو...',
      isSignature: true,
    },

    // ... (هنا هتنسخ كل الأطباق اللي عملناها قبل كده بس تأكد من categoryId لكل واحد)
  ];

  getCategories() {
    return this.categories;
  }

  // 3. الدالة السحرية للفلترة
  getItemsByCategory(categoryId: string): MenuItem[] {
    return this.items.filter((item) => item.categoryId === categoryId);
  }

  // دالة لجلب اسم القسم وتفاصيله عشان نحطه في عنوان الصفحة
  getCategoryDetails(categoryId: string): Category | undefined {
    return this.categories.find((cat) => cat.id === categoryId);
  }
}
