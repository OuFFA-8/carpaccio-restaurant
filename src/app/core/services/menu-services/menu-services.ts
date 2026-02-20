import { Injectable } from '@angular/core';

export interface Category {
  id: string;
  ar: string;
  it: string;
  img: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  ar: string;
  it: string;
  price: string;
  img: string;
  description: string;
  isSignature: boolean;
  enDescription?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuServices {
  // 1. تعريف الأقسام (العناوين اللي هتظهر في الصفحة الرئيسية)
  categories: Category[] = [
    {
      id: 'breakfast',
      ar: 'قسم الفطور',
      it: 'Colazione',
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
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
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
    },
    {
      id: 'italian-kitchen',
      ar: 'المطبخ الإيطالي',
      it: 'Cucina Italiana',
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
    },
    {
      id: 'main-dishes',
      ar: 'الأطباق الرئيسية',
      it: 'Piatti Principali',
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
    },
    {
      id: 'chefs-kitchen',
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
      id: 'kids-menu',
      ar: 'وجبات الأطفال',
      it: 'Menu Bambini',
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
    },
    {
      id: 'side-dishes',
      ar: 'قسم الإضافات',
      it: 'Contorni',
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
    },
    {
      id: 'desserts',
      ar: 'قسم الحلويات',
      it: 'Dolci',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974',
    },

    // المشروبات بفروعها (يمكنك جعلها قسم واحد كبير أو تقسيمها)
    {
      id: 'hot-drinks',
      ar: 'مشروبات ساخنة',
      it: 'Bevande Calde',
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974',
    },
    {
      id: 'natural-juices',
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
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
    },
  ];

  items: MenuItem[] = [
    // الفطور (Colazione)
    {
      id: 'bf-1',
      categoryId: 'breakfast',
      it: 'Carpaccio Breakfast Experience',
      ar: 'تجربة فطور كرباتشيو',
      price: '69 / 129',
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980',
      description:
        'استمتع بتجربة افطار كرباتشيو المميزة لشخص او شخصين. تتضمن اومليت حسب الطلب او بيض عيون، سلطة شيري وأعشاب طازجة، 3 أنواع أجبان مختارة بعناية، قلاية بندورة إيطالية، 9 أنواع مشهيات فاخرة، تقدم مع خبز طابون فوكاتشا طازجة من فرن كرباتشيو، مشروب ساخن، وعصير طبيعي.',
      enDescription:
        'Enjoy the signature Carpaccio breakfast for one or two. Includes omelet to order or sunny-side-up eggs, cherry herb salad, 3 premium selected cheeses, Italian tomato pan, 9 luxury appetizers, served with fresh Focaccia bread from our stone oven, a hot drink, and fresh juice.',
      isSignature: true,
    },
    {
      id: 'bf-2',
      categoryId: 'breakfast',
      it: 'Verona Healthy Bowl',
      ar: 'طبق فيرونا الصحي',
      price: '49',
      img: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1980',
      description:
        'وعاء فيرونا الصحي يأتيك مليئاً بالفواكة الموسمية الطازجة بالإضافة الى الشوفان المقرمش والجرانولا، يقدم مع لبن يوناني، عسل طبيعي، وطحينية فاخرة.',
      enDescription:
        'A healthy Verona bowl filled with fresh seasonal fruits, crunchy oats, and granola, served with Greek yogurt, natural honey, and premium tahini.',
      isSignature: false,
    },
    {
      id: 'bf-3',
      categoryId: 'breakfast',
      it: 'Pomodorino Pancake',
      ar: 'بومودورينو بانكيك',
      price: '49',
      img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1980',
      description:
        'بانكيك محضر طازج يومياً بلمسة كرباتشيو الخاصة، يتميز بقوام هش ولذيذ. يقدم مع سيرب الميبل الطبيعي وفواكه موسمية طازجة وصوص شوكولاتة.',
      enDescription:
        'Freshly prepared pancakes with Carpaccio’s special touch, featuring a light and fluffy texture. Served with natural maple syrup, fresh seasonal fruits, and chocolate sauce.',
      isSignature: false,
    },
    {
      id: 'bf-4',
      categoryId: 'breakfast',
      it: 'Parisian French Toast',
      ar: 'فرنش توست باريسي',
      price: '49',
      img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547',
      description:
        'خبز توست الشوفان مغمس بخلطة كرباتشيو المميزة ومحمص بأجود أنواع الزبدة، يقدم مقرمش مع صوص الفراولة وعسل طبيعي.',
      enDescription:
        'Oat toast dipped in Carpaccio’s signature mix and toasted with premium butter, served crispy with strawberry sauce and natural honey.',
      isSignature: false,
    },
    {
      id: 'bf-5',
      categoryId: 'breakfast',
      it: 'Pastore Breakfast',
      ar: 'فطور باستوري',
      price: '54',
      img: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=1964',
      description:
        'شكشوكة كرباتشيو الخاصة مع 2 بيض عيون، زيتون، طحينية، سلطة عربية مع الأعشاب الطازجة، بالإضافة الى خبز الطابون الطازج من فرن كرباتشيو (إفطار تقليدي بلمسة عصرية).',
      enDescription:
        'Carpaccio special Shakshuka with 2 sunny-side-up eggs, olives, tahini, Arabic herb salad, and fresh Taboon bread from our stone oven (A traditional breakfast with a modern touch).',
      isSignature: false,
    },

    // --- أمثلة للشوربات ---
    {
      id: 'soup-1',
      categoryId: 'soups',
      it: 'Kibbeh Hamousta',
      ar: 'كبة حاموستا (توقيع كرباتشيو)',
      price: '39',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
      description:
        'كبة سميد محشوة بلحم اسادو مدخن فاخر، مطهوة في شوربة كرفس حامضة لتجربة مذاق فريدة تجمع بين الأصالة والابتكار.',
      enDescription:
        'Semolina Kibbeh stuffed with premium smoked Asado meat, cooked in a sour celery soup for a unique taste that blends tradition and innovation.',
      isSignature: true,
    },
    {
      id: 'soup-2',
      categoryId: 'soups',
      it: 'Beetroot Kibbeh Soup',
      ar: 'شوربة كبة البنجر',
      price: '38',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
      description:
        'كبة سميد فاخرة تقدم في شوربة بنجر صحية وغنية، تتميز بلونها الزاهي ونكهتها الفريدة التي تضفي لمسة من الحيوية على مائدتك.',
      enDescription:
        'Premium semolina Kibbeh served in a healthy, rich beetroot soup, featuring a vibrant color and a unique flavor that brings life to your table.',
      isSignature: false,
    },
    {
      id: 'soup-3',
      categoryId: 'soups',
      it: 'Lentil Soup',
      ar: 'شوربة عدس على طريقة كرباتشيو',
      price: '29',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
      description:
        'الشوربة التقليدية بلمسة كرباتشيو الخاصة، محضرة من أجود أنواع العدس والبهارات العطرية لتمنحك الدفء والمذاق الأصيل.',
      enDescription:
        'Traditional soup with Carpaccio’s special touch, prepared from the finest lentils and aromatic spices to give you warmth and authentic taste.',
      isSignature: false,
    },
    {
      id: 'soup-4',
      categoryId: 'soups',
      it: 'Vegetable Soup',
      ar: 'شوربة خضار',
      price: '19',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
      description:
        'مزيج طازج من خضروات الموسم المطهوة بعناية في مرق غني بالنكهات الطبيعية، خيار صحي وخفيف.',
      enDescription:
        'A fresh mix of seasonal vegetables carefully cooked in a broth rich with natural flavors, a healthy and light choice.',
      isSignature: false,
    },
    {
      id: 'soup-5',
      categoryId: 'soups',
      it: 'Seafood Soup',
      ar: 'شوربة فواكه البحر',
      price: '34',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071',
      description:
        'تشكيلة فاخرة من ثمار البحر (جمبري، كلماري، وبلح البحر) مطهوة في مرق غني بالكريمة والأعشاب الإيطالية لتجربة بحرية لا تُنسى.',
      enDescription:
        'A luxury selection of seafood (shrimp, calamari, and mussels) cooked in a rich cream broth with Italian herbs for an unforgettable marine experience.',
      isSignature: true,
    },
    // المقبلات الباردة (Antipasti Freddi)
    {
      id: 'antipasti-beef-carpaccio',
      categoryId: 'cold-appetizers',
      it: 'Beef Fillet Carpaccio',
      ar: 'كرباتشيو فيليه العجل',
      price: '39',
      img: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?q=80&w=2070',
      description:
        'فيليه عجل نيء معتق على الطريقة الإيطالية الأصلية؛ شرائح رفيعة جداً من لحم العجل المعتق تقدم مع جبنة البارميزان الفاخرة وأوراق الجرجير الطازجة، مع لمسة غنية من زيت الزيتون البكر.',
      enDescription:
        'Authentic Italian-style raw aged beef fillet; ultra-thin slices of aged beef served with premium Parmesan, fresh arugula, and a rich touch of extra virgin olive oil.',
      isSignature: true,
    },
    {
      id: 'antipasti-tuna-carpaccio',
      categoryId: 'cold-appetizers',
      it: 'Red Tuna Carpaccio',
      ar: 'كرباتشيو التونا الحمراء',
      price: '38',
      img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=2070',
      description:
        'تونا حمراء فاخرة من أجود الأنواع، معدة بتتبيلة مطعم كرباتشيو السرية، تقدم مع صوص الثوم الكريمي والأعشاب العطرية التي تبرز نكهة البحر.',
      enDescription:
        'Premium red tuna prepared with Carpaccio’s secret marinade, served with creamy garlic sauce and aromatic herbs to highlight the ocean’s freshness.',
      isSignature: true,
    },
    // المقبلات ساخنة (Antipasti Caldi)
    {
      id: 'hot-antipasti-portobello',
      categoryId: 'hot-appetizers',
      it: 'Portobello con Crema di Salmone',
      ar: 'فطر بورتوبيلو بكريم السلمون',
      price: '38',
      img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070',
      description:
        'فطر بورتوبيلو مشوي ومحشي بالسلمون المدخن وجبنة الريكوتا المميزة، يقدم مع صوص بيانكا كريمي ومتبل بالأعشاب الطازجة.',
      enDescription:
        'Grilled Portobello mushroom stuffed with smoked salmon and specialty Ricotta cheese, served with creamy Bianca sauce and fresh herbs.',
      isSignature: true,
    },
    {
      id: 'hot-antipasti-shrimp',
      categoryId: 'hot-appetizers',
      it: 'Gamberi Black Tiger Piccante',
      ar: 'جمبري بلاك تايجر الحار بالكزبرة',
      price: '44',
      img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974',
      description:
        'جمبري طازج مشوي على الجريل ومغطى بميرنادا الشطة والكزبرة، ليمنحك مذاقاً آسيوياً إيطالياً مميزاً وفريداً.',
      enDescription:
        'Fresh grilled Black Tiger shrimp coated in chili and cilantro marinade, offering a unique fusion of Asian and Italian flavors.',
      isSignature: false,
    },
    {
      id: 'hot-antipasti-focaccia-colazione',
      categoryId: 'hot-appetizers',
      it: 'Focaccia Colazione',
      ar: 'فوكاتشا كلازيون',
      price: '28',
      img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2070',
      description:
        'فوكاتشا إيطالية تقليدية، معطرة بالثوم وإكليل الجبل الطازج، تقدم مع تشكيلة من المازات الإيطالية الأصيلة.',
      enDescription:
        'Traditional Italian focaccia, flavored with fresh garlic and rosemary, served with a selection of authentic Italian appetizers.',
      isSignature: false,
    },
    {
      id: 'hot-antipasti-filo-fig',
      categoryId: 'hot-appetizers',
      it: 'Filo di Fichi e Feta',
      ar: 'فيلو التين وجبن الفيتا',
      price: '42',
      img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1974',
      description:
        'تين موسمي طازج يقدم مع جبن الفيتا المالح، مغلفان بعجينة الفيلو المقرمشة ومزين بصوص الكراميل اللذيذ.',
      enDescription:
        'Fresh seasonal figs with salty Feta cheese, wrapped in crispy Filo pastry and drizzled with delicious caramel sauce.',
      isSignature: true,
    },
    {
      id: 'hot-antipasti-pastilla',
      categoryId: 'hot-appetizers',
      it: 'Pastilla Marocchina',
      ar: 'الباستيا المغربية',
      price: '44',
      img: 'https://images.unsplash.com/photo-1644704078423-7a91512f4b30?q=80&w=1974',
      description:
        'عجينة مغربية رقيقة ومقرمشة محشوة بلحم متبل ببهارات كرباتشيو ومقلية بالزيت، بالإضافة إلى الفواكة المجففة والقرفة والسكر الناعم لمزيج حلو ومالح مثالي.',
      enDescription:
        'Crispy Moroccan pastry stuffed with spiced meat, dried fruits, cinnamon, and powdered sugar for a perfect sweet and savory blend.',
      isSignature: false,
    },
    {
      id: 'hot-antipasti-focaccia-caprese',
      categoryId: 'hot-appetizers',
      it: 'Focaccia Caprese',
      ar: 'فوكاتشا كابريزة',
      price: '38',
      img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076',
      description:
        'فوكاتشا طابون طازجة من فرن كرباتشيو المميز، تغطى بالطماطم الطازجة وجبنة الموزيريلا الكريمية وأوراق الريحان مع رشة من زيت الزيتون البكر.',
      enDescription:
        'Fresh stone-oven focaccia topped with fresh tomatoes, creamy Mozzarella, basil leaves, and extra virgin olive oil.',
      isSignature: false,
    },
    // المطبخ الإيطالي (Cucina Italiana) - أمثلة
    {
      id: 'pasta-ravioli',
      categoryId: 'italian-kitchen',
      it: 'Ravioli ai Quattro Formaggi',
      ar: 'رافيولي الأجبان',
      price: '64',
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
      description:
        'أصابع الرافيولي المحشوة بمزيج غني من أربعة أجبان إيطالية فاخرة (موتزيريلا، بارميزان، ريكوتا، فيتا) تقدم مع صوص روزيه كريمي يذوب في الفم.',
      enDescription:
        'Ravioli stuffed with a rich blend of four premium Italian cheeses (Mozzarella, Parmesan, Ricotta, Feta), served with a creamy Rosé sauce that melts in your mouth.',
      isSignature: true,
    },
    {
      id: 'pasta-fettuccine',
      categoryId: 'italian-kitchen',
      it: 'Fettuccine Cocorico',
      ar: 'فيتوتشيني كوكوريكو',
      price: '72',
      img: 'https://images.unsplash.com/photo-1645112481338-69067b884d73?q=80&w=2070',
      description:
        'فيتوتشيني طازجة تقدم مع قطع صدر الدجاج المشوية على الجريل مع صوص بيانكا الأبيض وشرائح الفطر الطازج.',
      enDescription:
        'Fresh fettuccine served with grilled chicken breast pieces, creamy Bianca sauce, and fresh mushroom slices.',
      isSignature: false,
    },
    {
      id: 'pasta-thai-noodles',
      categoryId: 'italian-kitchen',
      it: 'Noodles Thailandesi',
      ar: 'نودلز تايلندي',
      price: '49',
      img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1964',
      description:
        'نودلز آسيوية مقلية على الطريقة التايلندية مع خضار طازجة وصوص غني بنكهة الصويا والليمون، بلمسة توازن مثالية بين الحلو والحامض.',
      enDescription:
        'Asian fried noodles prepared Thai-style with fresh vegetables and a rich soy-lemon sauce, perfectly balancing sweet and sour notes.',
      isSignature: false,
    },
    {
      id: 'pasta-bolognese',
      categoryId: 'italian-kitchen',
      it: 'Pasta alla Bolognese',
      ar: 'باستا بولونيز',
      price: '49',
      img: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070',
      description:
        'باستا إيطالية كلاسيكية تُقدَّم مع صوص بولونيز الشهير المحضر من اللحم المفروم الطازج والطماطم العطرية والأعشاب الإيطالية.',
      enDescription:
        'Classic Italian pasta served with the famous Bolognese sauce made from fresh minced meat, aromatic tomatoes, and Italian herbs.',
      isSignature: false,
    },
    {
      id: 'pasta-pesto',
      categoryId: 'italian-kitchen',
      it: 'Penne al Pesto',
      ar: 'بيني بيستو',
      price: '49',
      img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994',
      description:
        'مكرونة بيني ممزوجة بصوص البيستو الإيطالي الطازج المحضّر من الريحان، الصنوبر، زيت الزيتون، وجبنة البارميزان المعتقة.',
      enDescription:
        'Penne pasta tossed in fresh Italian Pesto sauce made from basil, pine nuts, olive oil, and aged Parmesan cheese.',
      isSignature: false,
    },
    // الاطباق الرئيسية (Piatti Principali) - أمثلة
    {
      id: 'main-chicken-stroganoff',
      categoryId: 'main-dishes',
      it: 'Pollo alla Stroganoff',
      ar: 'دجاج استروجونوف',
      price: '68',
      img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070',
      description:
        'صدر دجاج طري مطهو بصوص كريمي غني بالمشروم والأعشاب العطرية، يقدم مع الأرز الأبيض الناصع. طبق كلاسيكي بلمسة كرباتشيو الخاصة.',
      enDescription:
        'Tender chicken breast cooked in a rich creamy mushroom and herb sauce, served with steamed white rice. A classic dish with Carpaccio’s signature touch.',
      isSignature: false,
    },
    {
      id: 'main-lamb-chops',
      categoryId: 'main-dishes',
      it: 'Costolette di Agnello Verona',
      ar: 'ريش خاروف فيرونا',
      price: '118',
      img: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070',
      description:
        'ريش خاروف طرية بوزن 450غم ومتبلة بعناية ومشوية ببراعة، تقدم مع بيوريه الخضار الناعم وتشكيلة من الخضار الموسمية المشوية.',
      enDescription:
        'Tender lamb chops (450g) meticulously marinated and expertly grilled, served with smooth vegetable puree and a selection of seasonal grilled vegetables.',
      isSignature: true,
    },
    {
      id: 'main-kebab-taboon',
      categoryId: 'main-dishes',
      it: 'Kebab al Forno Taboon',
      ar: 'فخارة كباب بالطابون',
      price: '88',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
      description:
        'كباب فاخر من لحم العجل الطازج بالإضافة إلى الصنوبر والكستناء على صوص الاسكندر، يخبز مع خبز الطابون الطازج من فرن كرباتشيو مع الخضار المشوية.',
      enDescription:
        'Premium fresh veal kebab with pine nuts and chestnuts on Iskender sauce, baked under fresh Taboon bread from Carpaccio’s oven with grilled vegetables.',
      isSignature: true,
    },
    {
      id: 'main-grill-mix-380',
      categoryId: 'main-dishes',
      it: 'Grigliata Mista Gerosolimitana (Piccolo)',
      ar: 'مشكل مشاوي مقدسي (380 غرام)',
      price: '88',
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974',
      description:
        'تشكيلة فاخرة لشخص واحد (كباب، صدر دجاج، ريش خاروف، انتلايكوت) على الجريل 380 غرام محضرة بأسلوب مقدسي أصيل، تقدم مع الطحينة وصوص التشيميتشوري.',
      enDescription:
        'A premium mixed grill for one (Kebab, chicken breast, lamb chops, entrecote) – 380g prepared in authentic Jerusalem style, served with Tahini and Chimichurri sauce.',
      isSignature: false,
    },
    {
      id: 'main-grill-mix-750',
      categoryId: 'main-dishes',
      it: 'Grigliata Mista Gerosolimitana (Grande)',
      ar: 'مشكل مشاوي مقدسي (750 غرام)',
      price: '154',
      img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1935',
      description:
        'تشكيلة فاخرة لشخصين (كباب، صدر دجاج، ريش خاروف، انتلايكوت) على الجريل 750 غرام محضرة بأسلوب مقدسي أصيل، تقدم مع الطحينة الغنية وصوص التشيميتشوري المنعش.',
      enDescription:
        'Luxury mixed grill for two (Kebab, chicken breast, lamb chops, entrecote) – 750g prepared in authentic Jerusalem style, served with rich Tahini and fresh Chimichurri.',
      isSignature: true,
    },
    {
      id: 'main-carpaccio-burger',
      categoryId: 'main-dishes',
      it: 'Carpaccio Burger Speciale',
      ar: 'برغر كرباتشو',
      price: '54',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899',
      description:
        'برغر عجل فاخر بوزن 200غ، محضر من أجود أنواع اللحم يُقدم في خبز طازج مع شرائح البطاطا الودجز المقرمشة.',
      enDescription:
        'Premium 200g veal burger, made from the finest meat cuts, served in fresh bread with crispy potato wedges.',
      isSignature: false,
    },
    // مطبخ الشيف (Chef's Signature) - أمثلة
    {
      id: 'chef-entrecote-argentine',
      categoryId: 'chefs-kitchen',
      it: 'Entrecôte Argentina Invecchiata',
      ar: 'أنتريكوت أرجنتيني معتق',
      price: '124',
      img: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1974',
      description:
        'قطعة فاخرة بوزن 300 غم من لحم الانتريكوت الأرجنتيني المعتق بعناية، تقدم مع بطاطا مشوية، خضار سوتيه طازجة وصوص بورتوبيلو الغني.',
      enDescription:
        'A premium 300g cut of carefully aged Argentine Entrecôte, served with roasted potatoes, fresh sautéed vegetables, and rich Portobello sauce.',
      isSignature: true,
    },
    {
      id: 'chef-entrecote-wagyu',
      categoryId: 'chefs-kitchen',
      it: 'Wagyu Argentino Speciale',
      ar: 'أنتريكوت واجيو أرجنتيني معتق',
      price: '159',
      img: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=2070',
      description:
        'تجربة الرفاهية القصوى مع لحم الواجيو الأرجنتيني المعتق، يتميز بالرخامية العالية والمذاق الذي يذوب في الفم، محضر بأسلوب الشيف الخاص.',
      enDescription:
        'The ultimate luxury experience with aged Argentine Wagyu beef, featuring high marbling and a melt-in-your-mouth texture, prepared in the Chef’s special style.',
      isSignature: true,
    },
    {
      id: 'chef-fillet-medallions',
      categoryId: 'chefs-kitchen',
      it: 'Medaglioni di Filetto di Vitello',
      ar: 'مداليات فيليه العجل',
      price: '134',
      img: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2062',
      description:
        'مداليات فيليه عجل معتق وطرية بوزن 300 غم، مُعدة ببراعة ومقدمة مع صوص الخردل الفرنسي الكلاسيكي لمذاق يجمع بين الرقي والأصالة.',
      enDescription:
        'Tender aged veal fillet medallions (300g), masterfully prepared and served with classic French mustard sauce for a sophisticated and authentic taste.',
      isSignature: false,
    },
    {
      id: 'chef-chicken-steak',
      categoryId: 'chefs-kitchen',
      it: 'Bistecca di Pollo Grigliata',
      ar: 'ستيك صدر الدجاج',
      price: '74',
      img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913',
      description:
        'صدر دجاج مشوي باحترافية، يُقدم مع بيوريه الجرجير المنعش وصوص زبدة الليمون الحمضي، لتجربة طعام مغذية وخفيفة.',
      enDescription:
        'Professionally grilled chicken breast served with fresh arugula puree and zesty lemon butter sauce for a nutritious and light dining experience.',
      isSignature: false,
    },
    {
      id: 'chef-volostir-carpaccio',
      categoryId: 'chefs-kitchen',
      it: 'Volostir Carpaccio di Pollo',
      ar: 'فولوستير كرباتشو',
      price: '88',
      img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070',
      description:
        'طبق دجاج ومشروم فاخر، يُطهى بكريمة الصويا الغنية والبصل المكرمل، ليقدم مذاقاً متوازناً بين الحلو والمالح يذوب في الفم.',
      enDescription:
        'A premium chicken and mushroom dish cooked in rich soy cream and caramelized onions, offering a perfect sweet and savory balance.',
      isSignature: true,
    },
    {
      id: 'chef-chicken-parmiggiana',
      categoryId: 'chefs-kitchen',
      it: 'Pargiot di Pollo',
      ar: 'برجيوت دجاج',
      price: '59',
      img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070',
      description:
        'أفخاذ الدجاج المشوية (البرجيوت) بتتبيلة كرباتشيو الخاصة، تقدم بأسلوب عصري يحافظ على طراوة اللحم ونكهته الأصلية.',
      enDescription:
        'Grilled chicken thighs (Pargiot) with Carpaccio’s special seasoning, served in a modern style that preserves tenderness and original flavor.',
      isSignature: false,
    },
    // السمك والبحر (Pesce e Mare) - أمثلة
    {
      id: 'fish-barramundi',
      categoryId: 'seafood',
      it: 'Filetto di Barramundi in Crosta',
      ar: 'فيليه براموندي بالكريكر الفرنسي',
      price: '98',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070',
      description:
        'فيليه براموندي طازج مغلف بالكريكر الفرنسي المقرمش ومشوي بالفرن بعناية، يقدم مع خضار سوتيه طازجة.',
      enDescription:
        'Fresh Barramundi fillet coated in crispy French crackers and oven-baked to perfection, served with fresh sautéed vegetables.',
      isSignature: false,
    },
    {
      id: 'fish-denis-parisian',
      categoryId: 'seafood',
      it: 'Filetto di Orata alla Parigina',
      ar: 'فيليه دنيس بارازيان',
      price: '108',
      img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=2070',
      description:
        'فيليه دنيس مشوي بتتبيلة الثوم والأعشاب والليمون المنعشة، يقدم مع بطاطا سوتيه وخضار سوتيه.',
      enDescription:
        'Grilled Sea Bream (Denis) fillet marinated in a refreshing blend of garlic, herbs, and lemon, served with sautéed potatoes and vegetables.',
      isSignature: false,
    },
    {
      id: 'fish-salmon-papillote',
      categoryId: 'seafood',
      it: 'Salmone Norvegese al Cartoccio',
      ar: 'سلمون نرويجي بابيونا',
      price: '98',
      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974',
      description:
        'سلمون نرويجي فاخر مخبوز في فرن الطابون بتقنية البابيونا مع طماطم مجففة وريحان، يقدم مع بطاطا بيوريه ناعمة.',
      enDescription:
        'Premium Norwegian salmon baked in a stone oven using the "Papillote" technique with sun-dried tomatoes and basil, served with smooth mashed potatoes.',
      isSignature: true,
    },
    {
      id: 'fish-labrak-fried',
      categoryId: 'seafood',
      it: 'Spigola Intera Fritta',
      ar: 'سمك لبراك كامل مقلي',
      price: '118',
      img: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070',
      description:
        'سمكة لبراك (سيباس) كاملة مقلية بتتبيلة كرباتشو الخاصة المقرمشة، لمحبي المذاق البحري الأصيل.',
      enDescription:
        'Whole Sea Bass (Labrak) fried in Carpaccio’s signature crispy seasoning, perfect for authentic seafood lovers.',
      isSignature: false,
    },
    {
      id: 'fish-shrimp-black-tiger',
      categoryId: 'seafood',
      it: 'Gamberi Black Tiger al Burro',
      ar: 'جمبري بلاك تايجر بصوص الزبدة',
      price: '98',
      img: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974',
      description:
        'جمبري بلاك تايجر الفاخر مطهو بصوص زبدة بذور البندورة والزعتر البري لمذاق غني وعميق.',
      enDescription:
        'Premium Black Tiger shrimp cooked in a rich butter sauce with tomato seeds and wild thyme for a deep, savory flavor.',
      isSignature: false,
    },
    {
      id: 'fish-royal-plate',
      categoryId: 'seafood',
      it: 'Piatto Reale dello Chef (2 Pers.)',
      ar: 'بلاطة الشيف الملكية (لشخصين)',
      price: '248',
      img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1854',
      description:
        'تشكيلة فاخرة جداً وحصرية من فواكه البحر والأسماك المختارة، تقدم بأسلوب ملكي يكفي لشخصين.',
      enDescription:
        'An exclusive and luxurious assortment of selected seafood and fish, served in a royal style, perfect for two people.',
      isSignature: true,
    },
    {
      id: 'fish-seafood-pot',
      categoryId: 'seafood',
      it: 'Terracotta di Frutti di Mare al Cocco',
      ar: 'فخارة فواكه البحر بجوز الهند',
      price: '118',
      img: 'https://images.unsplash.com/photo-1534080564607-c9295478493b?q=80&w=2070',
      description:
        'مزيج من فواكه البحر (جمبري، كلماري، بلح البحر) مع خضار بصوص كريمة جوز الهند والأعشاب، تطهى في الفخار لتركيز النكهات.',
      enDescription:
        'A blend of seafood (shrimp, calamari, mussels) with vegetables in a coconut cream and herb sauce, slow-cooked in a terracotta pot.',
      isSignature: true,
    },
    // السلطات (Insalate) - أمثلة
    {
      id: 'salad-la-carpaccio',
      categoryId: 'salads',
      it: 'Insalata La Carpaccio',
      ar: 'سلطة لا كرباتشو',
      price: '48',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070',
      description:
        'مكس من الأعشاب العطرية الطازجة، برغل، مكس مكسرات (كاشيو، فستق حلبي، لوز، فول سوداني)، حوامض، ستروبري، صوص زيت الزيتون والليمون مع خل البلسميك والتوابل الخاصة.',
      enDescription:
        'A mix of fresh aromatic herbs, bulgur, assorted nuts (cashew, pistachio, almond, peanut), citrus, strawberries, olive oil and lemon dressing with balsamic vinegar.',
      isSignature: true,
    },
    {
      id: 'salad-sicilia',
      categoryId: 'salads',
      it: 'Insalata Sicilia',
      ar: 'سلطة سيسيليا',
      price: '48',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1968',
      description:
        'البطاطا الحلوة المشوية مع البنجر والكولورابي والخيار على ميكس الخس والجرجير بصوص سيتسيليا المميز ومبروش جبنة الفيتا.',
      enDescription:
        'Grilled sweet potatoes with beets, kohlrabi, and cucumber on a bed of mixed lettuce and arugula with signature Sicilian sauce and crumbled Feta cheese.',
      isSignature: false,
    },
    {
      id: 'salad-pomodorini',
      categoryId: 'salads',
      it: 'Insalata di Pomodorini',
      ar: 'سلطة بومودوريني',
      price: '48',
      img: 'https://images.unsplash.com/photo-1592417817098-8f3b6be00d86?q=80&w=1974',
      description:
        'بندورة الشيري الكرزية الإيطالية وزيتون الكلماتا اليوناني مع صوص البيستو العطري، وجبنة البرينزاه المبروشة مع زيت الزيتون الصافي.',
      enDescription:
        'Italian cherry tomatoes and Greek Kalamata olives with aromatic pesto sauce, topped with grated Brinza cheese and pure olive oil.',
      isSignature: false,
    },
    {
      id: 'salad-endive',
      categoryId: 'salads',
      it: 'Insalata di Indivia',
      ar: 'سلطة الإنديف الإيطالية',
      price: '58',
      img: 'https://images.unsplash.com/photo-1515544867661-3044d85c3cb9?q=80&w=1974',
      description:
        'خس فريسكو، خسة عربية، جرجير، خيار، بصل أحمر وبندورة شيري بصوص الأنديف الإيطالي، مغلفة بخسة الأنديف المميزة مع جبن البارميزان ومعجون البيستو.',
      enDescription:
        'Frisco lettuce, Arabic lettuce, arugula, cucumber, red onion, and cherry tomatoes with Italian Endive sauce, wrapped in unique Endive leaves with Parmesan and pesto.',
      isSignature: true,
    },
    {
      id: 'salad-black-forest',
      categoryId: 'salads',
      it: 'Insalata Foresta Nera',
      ar: 'سلطة الغابة السوداء',
      price: '58',
      img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070',
      description:
        '3 أنواع من الفطر الفاخر (شامبينون، بورتوبيلو، والياعر) مطهوة مع بندورة الشيري والريحان بصوص كريم الصويا والترياكي، تقدم على أوراق الخس فريسكو الإيطالي.',
      enDescription:
        'Three types of premium mushrooms (Champignon, Portobello, and Forest) sautéed with cherry tomatoes and basil in soy cream and teriyaki sauce, served over Frisco lettuce.',
      isSignature: true,
    },
    {
      id: 'salad-pastore',
      categoryId: 'salads',
      it: 'Insalata del Pastore',
      ar: 'سلطة الراعي باستوريه',
      price: '58',
      img: 'https://images.unsplash.com/photo-1505253716362-afaba1d3241f?q=80&w=1974',
      description:
        'قطع من جبن الغنم وجبن الحلومي المقلي مغلف بالبانكو والقرشلة، على مكس من الخضار الطازجة، بصل أحمر وخبز محمص بصوص الباستوريه الإيطالي الفاخر.',
      enDescription:
        'Pieces of sheep cheese and fried Halloumi coated in Panko, served on fresh mixed greens with red onion, croutons, and premium Italian Pastore sauce.',
      isSignature: false,
    },
    {
      id: 'salad-quinoa',
      categoryId: 'salads',
      it: 'Insalata di Quinoa',
      ar: 'سلطة الكينواه',
      price: '48',
      img: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1974',
      description:
        'كينواه مطهوة مع قطع التفاح والستروبري والأعشاب الطازجة، تقدم بصوص البرتقال المنعش.',
      enDescription:
        'Cooked quinoa with fresh apple pieces, strawberries, and fresh herbs, served with a refreshing orange dressing.',
      isSignature: false,
    },
    {
      id: 'salad-caesar',
      categoryId: 'salads',
      it: 'Insalata Caesar Classica',
      ar: 'سلطة سيزر كلاسيك',
      price: '35',
      img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070',
      description: 'لب الخس الطازج مع الخبز المحمص وجبن البارميزان مع صوص السيزر الأصلي.',
      enDescription:
        'Fresh hearts of Romaine lettuce with crispy croutons, Parmesan cheese, and authentic Caesar dressing.',
      isSignature: false,
    },
    {
      id: 'salad-extra-chicken',
      categoryId: 'extras',
      it: 'Pollo alla Griglia Extra',
      ar: 'إضافة صدر دجاج مشوي للسلطة',
      price: '18',
      img: 'https://images.unsplash.com/photo-1632778149975-420e0e75ee0d?q=80&w=2070',
      description: 'صدر دجاج مشوي متبل لإضافته على أي نوع سلطة مختار.',
      enDescription: 'Herb-marinated grilled chicken breast to be added to any selected salad.',
      isSignature: false,
    },
    {
      id: 'salad-buffet',
      categoryId: 'salads',
      it: 'Assortimento di Insalate (12 Tipi)',
      ar: 'تشكيلة سلطات كرباتشو (12 نوع)',
      price: '45',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053',
      description:
        'تشكيلة فاخرة من 12 نوع سلطة طازجة تحضر يومياً، يشمل إعادة التعبئة (Refill) عند طلب وجبة رئيسية.',
      enDescription:
        'A premium assortment of 12 types of fresh salads prepared daily; includes free refills when ordering a main course.',
      isSignature: true,
    },
    // الاطفال (Bambini) - أمثلة
    {
      id: 'kids-pizza-margherita',
      categoryId: 'kids-menu',
      it: 'Pizza Margherita per Bambini',
      ar: 'بيتزا مارجيريتا للأطفال',
      price: '34',
      img: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=2070',
      description:
        'بيتزا إيطالية بعجينة رقيقة محضرة خصيصاً للأطفال مع صلصة الطماطم الطبيعية وجبنة الموتزيريلا الغنية والريحان.',
      enDescription:
        'Authentic thin-crust Italian pizza specially prepared for kids, featuring natural tomato sauce, rich mozzarella cheese, and fresh basil.',
      isSignature: false,
    },
    {
      id: 'kids-schnitzel-chips',
      categoryId: 'kids-menu',
      it: 'Schnitzel di Pollo e Patatine',
      ar: 'أصابع شنيتسل وشيبس',
      price: '44',
      img: 'https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=2070',
      description:
        'أصابع دجاج مقرمشة محضرة من صدر الدجاج الطازج، تقدم مع أصابع البطاطا المقلية الذهبية.',
      enDescription:
        'Crispy chicken fingers made from fresh chicken breast, served with golden French fries.',
      isSignature: false,
    },
    {
      id: 'kids-chicken-chips',
      categoryId: 'kids-menu',
      it: 'Straccetti di Pollo e Patatine',
      ar: 'شرائح صدر الدجاج وشيبس',
      price: '44',
      img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070',
      description: 'شرائح صدر دجاج مشوية خفيفة وصحية، تقدم مع البطاطا المقلية المقرمشة.',
      enDescription:
        'Healthy and light grilled chicken breast strips, served with crispy French fries.',
      isSignature: false,
    },
    {
      id: 'kids-penne-napolitana',
      categoryId: 'kids-menu',
      it: 'Penne alla Napoletana',
      ar: 'بيني نابوليتانا',
      price: '34',
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032',
      description:
        'مكرونة بيني إيطالية تقدم مع صلصة الطماطم الكلاسيكية المحضرة من الطماطم الطازجة والأعشاب الهادئة.',
      enDescription:
        'Italian penne pasta served with classic Neapolitan tomato sauce made from fresh tomatoes and mild herbs.',
      isSignature: false,
    },
    {
      id: 'kids-mini-burger',
      categoryId: 'kids-menu',
      it: 'Mini Burger Classico (150g)',
      ar: 'برغر ميني 150 غم',
      price: '39',
      img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1780',
      description:
        'برغر عجل صغير (150غم) محضر بأسلوب كرباتشيو، يقدم في خبز طري ومناسب للأطفال مع البطاطا.',
      enDescription:
        'Mini veal burger (150g) prepared Carpaccio-style, served in a soft bun perfect for kids, with a side of fries.',
      isSignature: false,
    },
    // الإضافات
    {
      id: 'extra-chips',
      categoryId: 'side-dishes',
      it: 'Patatine Fritte',
      ar: 'شيبس',
      price: '18',
      img: 'https://images.unsplash.com/photo-1573015084184-3ce2af99b748?q=80&w=2070',
      description: 'أصابع البطاطا المقلية الذهبية والمقرمشة، تقدم ساخنة مع الملح.',
      enDescription: 'Golden and crispy French fries, served hot and lightly salted.',
      isSignature: false,
    },
    {
      id: 'extra-wedges',
      categoryId: 'side-dishes',
      it: 'Patate Wedges',
      ar: 'بطاطا ودجز',
      price: '18',
      img: 'https://images.unsplash.com/photo-1524338198850-8a2ff63a6372?q=80&w=1974',
      description: 'قطع بطاطا ودجز سميكة متبلة بالأعشاب ومحمرة في الفرن.',
      enDescription: 'Thick potato wedges seasoned with herbs and oven-roasted to perfection.',
      isSignature: false,
    },
    {
      id: 'extra-puree',
      categoryId: 'side-dishes',
      it: 'Purè di Patate',
      ar: 'بطاطا بيوريه (مهروسة)',
      price: '18',
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974',
      description: 'بطاطا مهروسة ناعمة محضرة بالزبدة والكريمة بلمسة كرباتشيو.',
      enDescription:
        'Smooth mashed potatoes prepared with premium butter and cream, with Carpaccio’s signature touch.',
      isSignature: false,
    },
    {
      id: 'extra-sauté',
      categoryId: 'side-dishes',
      it: 'Verdure Sauté',
      ar: 'خضار سوتيه',
      price: '18',
      img: 'https://images.unsplash.com/photo-1534939561126-72194c224753?q=80&w=1974',
      description: 'تشكيلة من خضروات الموسم الطازجة المطهوة على البخار مع القليل من زيت الزيتون.',
      enDescription:
        'A medley of fresh seasonal vegetables steamed and lightly sautéed with extra virgin olive oil.',
      isSignature: false,
    },
    {
      id: 'extra-hummus',
      categoryId: 'side-dishes',
      it: 'Piatto di Hummus',
      ar: 'صحن حمص',
      price: '18',
      img: 'https://images.unsplash.com/photo-1541518763669-27f9044d8ad8?q=80&w=2070',
      description: 'حمص كريمي أصيل محضر بالطريقة التقليدية مع زيت الزيتون البكر.',
      enDescription:
        'Authentic creamy hummus prepared traditionally with premium extra virgin olive oil.',
      isSignature: false,
    },
    {
      id: 'extra-rice',
      categoryId: 'side-dishes',
      it: 'Piatto di Riso',
      ar: 'صحن أرز',
      price: '18',
      img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1974',
      description: 'أرز أبيض ناصع مطهو بإتقان ليناسب الأطباق الرئيسية.',
      enDescription: 'Perfectly cooked fluffy white rice, a great accompaniment to any main dish.',
      isSignature: false,
    },
    {
      id: 'extra-hummus-meat',
      categoryId: 'side-dishes',
      it: 'Hummus con Carne',
      ar: 'حمص مع لحمة',
      price: '34',
      img: 'https://images.unsplash.com/photo-1577906030558-841f30869639?q=80&w=2070',
      description: 'حمص كريمي مغطى بقطع لحم العجل المفروم والمتبل والمحمص مع الصنوبر.',
      enDescription: 'Creamy hummus topped with seasoned minced veal and toasted pine nuts.',
      isSignature: true,
    },
    {
      id: 'extra-kibbeh-4',
      categoryId: 'side-dishes',
      it: 'Kibbeh (4 Pezzi)',
      ar: 'كبة (4 حبات)',
      price: '38',
      img: 'https://images.unsplash.com/photo-1628103120155-7096c646006e?q=80&w=2070',
      description: 'حبات الكبة المقلية المحشوة باللحم والمكسرات، تقدم مقرمشة وساخنة.',
      enDescription: 'Traditional fried Kibbeh stuffed with meat and nuts, served hot and crispy.',
      isSignature: false,
    },
    {
      id: 'extra-kibbeh-pomegranate',
      categoryId: 'side-dishes',
      it: 'Kibbeh alla Griglia con Melograno',
      ar: 'كبة مشوية مع دبس الرمان',
      price: '28',
      img: 'https://images.unsplash.com/photo-1628103120155-7096c646006e?q=80&w=2070',
      description: 'كبة مشوية على الفحم ومغطاة بصوص دبس الرمان الحامض والحلو لتجربة فريدة.',
      enDescription:
        'Charcoal-grilled Kibbeh glazed with sweet and sour pomegranate molasses for a unique flavor.',
      isSignature: true,
    },
    // قسم الحلويات (Desserts / Dolci)
    {
      id: 'dessert-lemon-pie',
      categoryId: 'desserts',
      it: 'Tarte au Citron Français',
      ar: 'باي الليمون الفرنسي',
      price: '34',
      img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1974',
      description:
        'تارت الليمون الفرنسي المنعش، يتميز بتوازن الحموضة والحلاوة، يقدم مع سكوب بوظة فانيلا فاخرة.',
      enDescription:
        'Refreshing French lemon tart with a perfect balance of sweet and tangy flavors, served with a scoop of premium vanilla ice cream.',
      isSignature: false,
    },
    {
      id: 'dessert-apple-almond',
      categoryId: 'desserts',
      it: 'Tarte Aux Pommes et Amandes',
      ar: 'باي التفاح واللووز الفرنسي',
      price: '34',
      img: 'https://images.unsplash.com/photo-1535927844539-9eec3b976b0b?q=80&w=2070',
      description:
        'تارت التفاح الفرنسي التقليدي مع شرائح اللوز المحمصة، يقدم دافئاً مع سكوب من بوظة الفانيلا.',
      enDescription:
        'Traditional French apple tart topped with toasted almond slices, served warm with a scoop of vanilla ice cream.',
      isSignature: true,
    },
    {
      id: 'dessert-tiramisu',
      categoryId: 'desserts',
      it: 'Tiramisù Classico Italiano',
      ar: 'تيراميسو إيطالي',
      price: '38',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974',
      description:
        'الحلوى الإيطالية الأشهر؛ طبقات من بسكويت ليدي فينجر المغموس في القهوة مع كريمة الماسكاربوني الغنية ورشة كاكاو.',
      enDescription:
        'The most famous Italian dessert; layers of espresso-soaked ladyfingers with rich mascarpone cream and a dusting of cocoa.',
      isSignature: true,
    },
    {
      id: 'dessert-ferrero',
      categoryId: 'desserts',
      it: 'Sinfonia di Ferrero Rocher',
      ar: 'فيريرو روشيه',
      price: '42',
      img: 'https://images.unsplash.com/photo-1548907040-4baa4335804b?q=80&w=1974',
      description:
        'كيكة الشوكولاتة الغنية بنكهة البندق والفريروشيه، مغطاة بطبقة مقرمشة من الشوكولاتة الفاخرة.',
      enDescription:
        'Rich chocolate cake with hazelnut and Ferrero Rocher flavors, coated in a premium crunchy chocolate layer.',
      isSignature: false,
    },
    {
      id: 'dessert-bounty',
      categoryId: 'desserts',
      it: 'Bounty al Cocco',
      ar: 'باونتي جوز الهند',
      price: '38',
      img: 'https://images.unsplash.com/photo-1590089415225-403ed3f96ca2?q=80&w=1974',
      description:
        'مزيج رائع بين جوز الهند الكريمي والشوكولاتة الداكنة، يقدم بأسلوب كرباتشيو العصري.',
      enDescription:
        'A wonderful blend of creamy coconut and dark chocolate, presented in Carpaccio’s modern style.',
      isSignature: false,
    },
    {
      id: 'dessert-tricolade',
      categoryId: 'desserts',
      it: 'Mousse Tricolade',
      ar: 'موس تريكولاد',
      price: '42',
      img: 'https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=1974',
      description:
        'ثلاث طبقات من موس الشوكولاتة (البيضاء، وبالحليب، والداكنة) لتجربة غنية لعشاق الشوكولاتة.',
      enDescription:
        'Three decadent layers of chocolate mousse (white, milk, and dark) for the ultimate chocolate lover’s experience.',
      isSignature: false,
    },
    {
      id: 'dessert-kokilida',
      categoryId: 'desserts',
      it: 'Kokilida Austriaca',
      ar: 'كوكيليدا نمساوية',
      price: '44',
      img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978',
      description:
        'من قلب المطبخ النمساوي، حلوى مميزة تجمع بين القوام الهش والحشوة الغنية بنكهة فريدة.',
      enDescription:
        'From the heart of Austrian cuisine, a unique dessert combining a light texture with a rich, flavorful filling.',
      isSignature: false,
    },
    {
      id: 'dessert-vanilla-forest',
      categoryId: 'desserts',
      it: 'Foresta di Vaniglia Italiana',
      ar: 'غابة الفانيلا الإيطالية',
      price: '39',
      img: 'https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=80&w=2071',
      description:
        'مزيج من كريمة الفانيلا الإيطالية الفاخرة مع ثمار الغابة الحمراء وصوص التوت البري.',
      enDescription:
        'A delightful blend of premium Italian vanilla cream with red forest fruits and wild berry sauce.',
      isSignature: false,
    },
    // كوكتيلات
    {
      id: 'drink-miami',
      categoryId: 'cocktails',
      it: 'Miami Cocktail',
      ar: 'كوكتيل ميامي',
      price: '32',
      img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974',
      description: 'مزيج منعش من التفاح، البطيخ، الأناناس، والنعنع الطازج.',
      enDescription: 'A refreshing tropical blend of apple, watermelon, pineapple, and fresh mint.',
      isSignature: false,
    },
    {
      id: 'drink-dubai',
      categoryId: 'cocktails',
      it: 'Dubai Cocktail',
      ar: 'كوكتيل دبي',
      price: '32',
      img: 'https://images.unsplash.com/photo-1544145945-f904253ed0ad?q=80&w=1974',
      description: 'كوكتيل فاخر يجمع بين الفستق الحلبي، الشوكولاتة، ولمسة من شعر الكنافة المقرمشة.',
      enDescription:
        'A luxurious cocktail blending pistachio, chocolate, and a touch of crispy Kunafa pastry.',
      isSignature: true,
    },
    {
      id: 'drink-carpaccio-spec',
      categoryId: 'cocktails',
      it: 'Carpaccio Special Shake',
      ar: 'كوكتيل كرباتشو خاص',
      price: '34',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974',
      description: 'مزيج طاقة من الموز، البيكان، النوتيلا والمكسرات المحمصة.',
      enDescription: 'An energy-boosting mix of banana, pecan, Nutella, and roasted nuts.',
      isSignature: true,
    },
    {
      id: 'drink-picolada',
      categoryId: 'cocktails',
      it: 'Pincolada Special',
      ar: 'كوكتيل بينكولادا',
      price: '32',
      img: 'https://images.unsplash.com/photo-1545244912-07640984024b?q=80&w=1974',
      description: 'خلطة كرباتشو من الليمون، جوز الهند، الأناناس والتفاح.',
      enDescription: 'Carpaccio’s special Pina Colada mix of lemon, coconut, pineapple, and apple.',
      isSignature: false,
    },
    {
      id: 'drink-passion',
      categoryId: 'cocktails',
      it: 'Passiflora & Mango Mix',
      ar: 'كوكتيل باسفلورا',
      price: '32',
      img: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1974',
      description: 'مزيج استوائي من المانجا، الباسفلورا والشمام.',
      enDescription: 'A tropical fusion of mango, passion fruit, and melon.',
      isSignature: false,
    },
    // مشروبات ساخنة
    {
      id: 'drink-cappuccino-lg',
      categoryId: 'hot-drinks',
      it: 'Cappuccino Grande',
      ar: 'كابتشينو كبير',
      price: '18',
      img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1974',
      description: 'قهوة إيطالية غنية مع رغوة الحليب الكثيفة.',
      enDescription: 'Rich Italian coffee topped with a thick, velvety milk foam.',
      isSignature: false,
    },
    {
      id: 'drink-espresso-dbl',
      categoryId: 'hot-drinks',
      it: 'Espresso Doppio',
      ar: 'اسبرسو دبل',
      price: '14',
      img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070',
      description: 'جرعة مضاعفة من القهوة الإيطالية المركزة.',
      enDescription: 'A double shot of intense, concentrated Italian espresso.',
      isSignature: false,
    },
    {
      id: 'drink-sahlab',
      categoryId: 'hot-drinks',
      it: 'Sahlab con Frutta Secca',
      ar: 'سحلب بالمكسرات',
      price: '18',
      img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1974',
      description: 'مشروب السحلب الدافئ المزين بالقرفة والمكسرات وجوز الهند.',
      enDescription:
        'Warm traditional Sahlab drink garnished with cinnamon, nuts, and shredded coconut.',
      isSignature: false,
    },
    // --- قسم العصائر والموهيتو (Natural Juices & Mojito) ---
    {
      id: 'drink-orange',
      categoryId: 'natural-juices',
      it: "Spremuta d'Arancia",
      ar: 'برتقال طبيعي',
      price: '24',
      img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1974',
      description: 'عصير برتقال طازج معصور يدوياً عند الطلب.',
      enDescription: 'Freshly squeezed orange juice, prepared right when you order.',
      isSignature: false,
    },
    {
      id: 'drink-mix-juice',
      categoryId: 'natural-juices',
      it: 'Mix Carota e Arancia',
      ar: 'مكس جزر وبرتقال',
      price: '28',
      img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070',
      description: 'مزيج صحي غني بالفيتامينات من الجزر والبرتقال الطبيعي.',
      enDescription: 'A healthy, vitamin-rich blend of fresh carrots and natural oranges.',
      isSignature: false,
    },
    {
      id: 'drink-detox',
      categoryId: 'natural-juices',
      it: 'Carpaccio Detox Mix',
      ar: 'خلطة كرباتشو الصحية',
      price: '24',
      img: 'https://images.unsplash.com/photo-1610970882799-64a3e1d209c0?q=80&w=1974',
      description: 'مزيج الديتوكس الخاص: زنجبيل، كرفس، وبنجر.',
      enDescription: 'Our signature detox blend: fresh ginger, celery, and beetroot.',
      isSignature: true,
    },
    {
      id: 'drink-mojito-berry',
      categoryId: 'natural-juices',
      it: 'Mojito ai Frutti di Bosco',
      ar: 'موهيتو توت / بلوبري',
      price: '24',
      img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974',
      description: 'موهيتو منعش مع قطع التوت البري والنعناع.',
      enDescription: 'Refreshing mojito with fresh forest berries and mint leaves.',
      isSignature: false,
    },
    {
      id: 'drink-mojito-xl',
      categoryId: 'natural-juices',
      it: 'Mojito XL e Menta',
      ar: 'موهيتو اكس ال ونعنع',
      price: '28',
      img: 'https://images.unsplash.com/photo-1546171753-97d7689e48aa?q=80&w=1974',
      description: 'طاقة إضافية مع موهيتو الإكس ال والنعناع المنعش.',
      enDescription: 'Extra energy boost with XL Mojito and fresh refreshing mint.',
      isSignature: false,
    },
    {
      id: 'drink-shake-nutella',
      categoryId: 'natural-juices',
      it: 'Milkshake alla Nutella',
      ar: 'ميلك شيك نوتيلا',
      price: '26',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974',
      description: 'ميلك شيك كريمي غني بشوكولاتة نوتيلا الأصلية.',
      enDescription: 'Creamy milkshake rich with original Nutella chocolate.',
      isSignature: false,
    },
    {
      id: 'drink-shake-signature',
      categoryId: 'natural-juices',
      it: 'Carpaccio Signature Shake',
      ar: 'كرباتشو سيغنتشر شيك',
      price: '28',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1974',
      description: 'إصدار الشيف الخاص من الميلك شيك بمكونات سرية.',
      enDescription: 'The Chef’s special edition milkshake with secret premium ingredients.',
      isSignature: true,
    },
    // قسم الايسكريم (Gelati / Ice Cream) - أمثلة
    {
      id: 'gelato-1-scoop',
      categoryId: 'ice-cream',
      it: 'Una Pallina di Gelato',
      ar: 'سكوب آيس كريم واحد',
      price: '12',
      img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=1974',
      description: 'اختر نكهتك المفضلة من تشكيلة الآيس كريم الإيطالية الطازجة.',
      enDescription:
        'Choose your favorite flavor from our selection of fresh authentic Italian gelato.',
      isSignature: false,
    },
    {
      id: 'gelato-2-scoops',
      categoryId: 'ice-cream',
      it: 'Due Palline di Gelato',
      ar: 'سكوبين آيس كريم',
      price: '22',
      img: 'https://images.unsplash.com/photo-1505394033343-e386791bd9d3?q=80&w=1974',
      description: 'مزيج من نكهتين من اختيارك من الجيلاتو الإيطالي الفاخر.',
      enDescription: 'A mix of two flavors of your choice from our premium Italian gelato.',
      isSignature: false,
    },
    {
      id: 'gelato-3-scoops',
      categoryId: 'ice-cream',
      it: 'Tre Palline di Gelato',
      ar: 'ثلاث سكوبات آيس كريم',
      price: '32',
      img: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?q=80&w=1974',
      description: 'التجربة الكاملة: ثلاث سكوبات من الآيس كريم بنكهات متنوعة حسب اختيارك.',
      enDescription:
        'The complete experience: three scoops of assorted gelato flavors of your choice.',
      isSignature: true,
    },
    // الاراجيل
    {
      id: 'shisha-carpaccio',
      categoryId: 'shisha',
      it: 'Narghilè Carpaccio Special',
      ar: 'أرجيلة كرباتشيو المميزة',
      price: '45',
      img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
      description: 'أرجيلة كرباتشيو الخاصة بخلطاتنا السرية وتجهيز احترافي لأفضل تجربة استرخاء.',
      enDescription:
        'Carpaccio special hookah with our secret blends, professionally prepared for the ultimate relaxation.',
      isSignature: true,
    },
    {
      id: 'shisha-nakhla',
      categoryId: 'shisha',
      it: 'Doppia Mela Nakhla',
      ar: 'تفاحتين نخلة',
      price: '40',
      img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
      description: 'النكهة التقليدية الأصلية من تفاحتين نخلة الشهيرة.',
      enDescription: 'The original traditional flavor of the famous Nakhla Double Apple.',
      isSignature: false,
    },
    {
      id: 'shisha-mazaya',
      categoryId: 'shisha',
      it: 'Doppia Mela Mazaya',
      ar: 'تفاحتين مزايا',
      price: '40',
      img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
      description: 'نكهة التفاحتين من مزايا بلمسة عصرية وكثافة دخان عالية.',
      enDescription: 'Mazaya Double Apple flavor with a modern touch and high smoke density.',
      isSignature: false,
    },
    {
      id: 'shisha-flavors-30',
      categoryId: 'shisha',
      it: 'Varietà di Gusti',
      ar: 'أراجيل بنكهات متنوعة (ليمون، بطيخ، علكة، Love 66)',
      price: '30',
      img: 'https://images.unsplash.com/photo-1527030126234-08ecff386121?q=80&w=1974',
      description:
        'تشكيلة نكهات منعشة تشمل: ليمون ونعنع، بطيخ ونعنع، علكة وقرفة، وخلطة Love 66 الشهيرة.',
      enDescription:
        'A variety of refreshing flavors including: Lemon Mint, Watermelon Mint, Gum & Cinnamon, and the famous Love 66 blend.',
      isSignature: false,
    },
  ];

  getCategories() {
    return this.categories;
  }

  getItemsByCategory(categoryId: string): MenuItem[] {
    return this.items.filter((item) => item.categoryId === categoryId);
  }

  getCategoryDetails(categoryId: string): Category | undefined {
    return this.categories.find((cat) => cat.id === categoryId);
  }
}
