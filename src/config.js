export const IMG_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill';

export const SWIGGY_GET_ALL_RESTAURANTS =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING';
export const data = [
  {
    type: 'restaurant',
    info: {
      resId: 931,
      name: 'KFC',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/1/931/567f0aa1ed15e11377a52d0514013f6e_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/1/931/567f0aa1ed15e11377a52d0514013f6e_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '4.0',
        rating_text: '4.0',
        rating_subtitle: 'Very Good',
        rating_color: '5BA829',
        votes: '5,643',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '3.9',
            reviewCount: '1,013',
            reviewTextSmall: '1,013 Reviews',
            subtext: '1,013 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '3.9',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '4.1',
            reviewCount: '4,630',
            reviewTextSmall: '4,630 Reviews',
            subtext: '4,630 Delivery Reviews',
            color: '#E23744',
            ratingV2: '4.1',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹400 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Connaught Place, New Delhi',
        address: 'A 12, Inner Circle, A Block, Connaught Place, New Delhi',
        localityUrl: '',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/burger/',
          name: 'Burger',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/fast-food/',
          name: 'Fast Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/biryani/',
          name: 'Biryani',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/desserts/',
          name: 'Desserts',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '17 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/kfc-connaught-place-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/kfc-connaught-place-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '1.1 km',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"931","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '2000+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 18472631,
      name: 'Delhi Darbar Dhaba',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/7/6357/45b184027ac9b78247c3978eaa203cb1_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/7/6357/45b184027ac9b78247c3978eaa203cb1_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.7',
        rating_text: '3.7',
        rating_subtitle: 'Good',
        rating_color: '9ACD32',
        votes: '4,624',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '3.7',
            reviewCount: '130',
            reviewTextSmall: '130 Reviews',
            subtext: '130 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '3.7',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '3.6',
            reviewCount: '4,494',
            reviewTextSmall: '4,494 Reviews',
            subtext: '4,494 Delivery Reviews',
            color: '#E23744',
            ratingV2: '3.6',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹500 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Gole Market, New Delhi',
        address:
          'Shop 10, Baird Line Market, Near Bhagat Singh Place, Gole Market, New Delhi',
        localityUrl: 'ncr/gole-market-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/chinese/',
          name: 'Chinese',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/fast-food/',
          name: 'Fast Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/mughlai/',
          name: 'Mughlai',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '11 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/delhi-darbar-dhaba-gole-market-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/delhi-darbar-dhaba-gole-market-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '865 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18472631","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '5450+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 1896,
      name: 'Jain Chawal Wale',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/6/1896/ede1a524f77ea28bb253f94cc831fda1_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/6/1896/ede1a524f77ea28bb253f94cc831fda1_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.4',
        rating_text: '3.4',
        rating_subtitle: 'Average',
        rating_color: 'CDD614',
        votes: '11K',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '2.7',
            reviewCount: '39',
            reviewTextSmall: '39 Reviews',
            subtext: '39 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '2.7',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'yellow',
              tint: '600',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '4.1',
            reviewCount: '11K',
            reviewTextSmall: '11K Reviews',
            subtext: '11K Delivery Reviews',
            color: '#E23744',
            ratingV2: '4.1',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹450 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Connaught Place, New Delhi',
        address: 'P 1/90, Connaught Circus, Connaught Place, New Delhi',
        localityUrl: 'ncr/connaught-place-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/chinese/',
          name: 'Chinese',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/street-food/',
          name: 'Street Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '12 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/jain-chawal-wale-connaught-place-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/jain-chawal-wale-connaught-place-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '854 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"1896","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '6400+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png',
          aspect_ratio: 2.0625,
        },
        text: 'Restaurant partner follows WHO protocol',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 899,
      name: 'Saravana Bhavan',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/9/899/6812b7d6166430abf0f62016ea8fe548_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/9/899/6812b7d6166430abf0f62016ea8fe548_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '4.4',
        rating_text: '4.4',
        rating_subtitle: 'Very Good',
        rating_color: '5BA829',
        votes: '15.5K',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '4.5',
            reviewCount: '3,128',
            reviewTextSmall: '3,128 Reviews',
            subtext: '3,128 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '4.5',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '4.3',
            reviewCount: '12.4K',
            reviewTextSmall: '12.4K Reviews',
            subtext: '12.4K Delivery Reviews',
            color: '#E23744',
            ratingV2: '4.3',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹700 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Janpath, New Delhi',
        address: '50, Atul Grove Road, Janpath, New Delhi',
        localityUrl: 'ncr/janpath-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/south-indian/',
          name: 'South Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/desserts/',
          name: 'Desserts',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/juices/',
          name: 'Juices',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '25 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/saravana-bhavan-janpath-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/saravana-bhavan-janpath-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '931 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"899","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '7075+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 18219558,
      name: 'Bikkgane Biryani',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/3/307893/2738bd3dfa84f54d62587a1f5af1c8fe_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '4.1',
        rating_text: '4.1',
        rating_subtitle: 'Very Good',
        rating_color: '5BA829',
        votes: '16.9K',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '4.1',
            reviewCount: '2,011',
            reviewTextSmall: '2,011 Reviews',
            subtext: '2,011 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '4.1',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '4.0',
            reviewCount: '14.9K',
            reviewTextSmall: '14.9K Reviews',
            subtext: '14.9K Delivery Reviews',
            color: '#E23744',
            ratingV2: '4.0',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹600 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Connaught Place, New Delhi',
        address: 'P-2/90, Opposite PVR Rivoli, Connaught Place, New Delhi',
        localityUrl: 'ncr/connaught-place-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/biryani/',
          name: 'Biryani',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/hyderabadi/',
          name: 'Hyderabadi',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/andhra/',
          name: 'Andhra',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/mughlai/',
          name: 'Mughlai',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '21 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/bikkgane-biryani-connaught-place-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/bikkgane-biryani-connaught-place-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '854 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18219558","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '6150+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 1204,
      name: 'Kaleva',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/3/1203/67abf071c647b0248b95b3058b624e85_o2_featured_v2.jpeg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/3/1203/67abf071c647b0248b95b3058b624e85_o2_featured_v2.jpeg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '4.2',
        rating_text: '4.2',
        rating_subtitle: 'Very Good',
        rating_color: '5BA829',
        votes: '10.4K',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '4.1',
            reviewCount: '509',
            reviewTextSmall: '509 Reviews',
            subtext: '509 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '4.1',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '4.3',
            reviewCount: '9,881',
            reviewTextSmall: '9,881 Reviews',
            subtext: '9,881 Delivery Reviews',
            color: '#E23744',
            ratingV2: '4.3',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹200 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Gole Market, New Delhi',
        address: '109, Bangla Sahib Marg, Gole Market, New Delhi',
        localityUrl: 'ncr/gole-market-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/mithai/',
          name: 'Mithai',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/street-food/',
          name: 'Street Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/desserts/',
          name: 'Desserts',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/south-indian/',
          name: 'South Indian',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '20 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/kaleva-gole-market-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/kaleva-gole-market-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '846 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"1204","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '4950+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 18742153,
      name: 'Gupta Restaurant',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/3/18742153/b4f773422ecf7c432d6b5b467551a313_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/3/18742153/b4f773422ecf7c432d6b5b467551a313_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.4',
        rating_text: '3.4',
        rating_subtitle: 'Average',
        rating_color: 'CDD614',
        votes: '2,382',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '2.9',
            reviewCount: '53',
            reviewTextSmall: '53 Reviews',
            subtext: '53 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '2.9',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'yellow',
              tint: '600',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '3.9',
            reviewCount: '2,329',
            reviewTextSmall: '2,329 Reviews',
            subtext: '2,329 Delivery Reviews',
            color: '#E23744',
            ratingV2: '3.9',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹400 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Gole Market, New Delhi',
        address: 'Shop 56, 57, Bhagat Singh Market, Gole Market, New Delhi',
        localityUrl: 'ncr/gole-market-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/south-indian/',
          name: 'South Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/chinese/',
          name: 'Chinese',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '20 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/gupta-restaurant-gole-market-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/gupta-restaurant-gole-market-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '827 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18742153","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '475+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png',
          aspect_ratio: 2.0625,
        },
        text: 'Restaurant partner follows WHO protocol',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 20035505,
      name: 'Pizza Hut',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/6/246/3f082a046a641c523081cbab51734d9f_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/6/246/3f082a046a641c523081cbab51734d9f_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.5',
        rating_text: '3.5',
        rating_subtitle: 'Good',
        rating_color: '9ACD32',
        votes: '2,765',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '3.4',
            reviewCount: '23',
            reviewTextSmall: '23 Reviews',
            subtext: '23 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '3.4',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '500',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '3.6',
            reviewCount: '2,742',
            reviewTextSmall: '2,742 Reviews',
            subtext: '2,742 Delivery Reviews',
            color: '#E23744',
            ratingV2: '3.6',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹700 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Karol Bagh, New Delhi',
        address:
          '17A/54, Ground Floor, W.E.A., Tank Road, Karol Bagh, New Delhi',
        localityUrl: 'ncr/karol-bagh-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/pizza/',
          name: 'Pizza',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/fast-food/',
          name: 'Fast Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/pasta/',
          name: 'Pasta',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/desserts/',
          name: 'Desserts',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '26 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/pizza-hut-1-karol-bagh-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/pizza-hut-1-karol-bagh-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '3 km',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20035505","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '7325+ orders placed from here recently',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 4057,
      name: 'Bikanervala',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.7',
        rating_text: '3.7',
        rating_subtitle: 'Good',
        rating_color: '9ACD32',
        votes: '8,211',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '3.5',
            reviewCount: '498',
            reviewTextSmall: '498 Reviews',
            subtext: '498 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '3.5',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '500',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '3.8',
            reviewCount: '7,713',
            reviewTextSmall: '7,713 Reviews',
            subtext: '7,713 Delivery Reviews',
            color: '#E23744',
            ratingV2: '3.8',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹400 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Connaught Place, New Delhi',
        address:
          '1st Floor, Rajiv Gandhi Handicraft Bhavan, Baba Kharak Singh Marg, Connaught Place, New Delhi',
        localityUrl: 'ncr/connaught-place-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/mithai/',
          name: 'Mithai',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/chinese/',
          name: 'Chinese',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/fast-food/',
          name: 'Fast Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/desserts/',
          name: 'Desserts',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '21 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/bikanervala-connaught-place-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/bikanervala-connaught-place-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '566 m',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"4057","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '1550+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 20462635,
      name: "La Pino'z Pizza",
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/7/18619067/5246b64c154fee077ce8cc18724dc3cf_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/chains/7/18619067/5246b64c154fee077ce8cc18724dc3cf_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.9',
        rating_text: '3.9',
        rating_subtitle: 'Good',
        rating_color: '9ACD32',
        votes: '947',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '3.9',
            reviewCount: '139',
            reviewTextSmall: '139 Reviews',
            subtext: '139 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '3.9',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '3.8',
            reviewCount: '808',
            reviewTextSmall: '808 Reviews',
            subtext: '808 Delivery Reviews',
            color: '#E23744',
            ratingV2: '3.8',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹500 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Karol Bagh, New Delhi',
        address: 'Shop 2, Old Rajinder Nagar Market, Karol Bagh, New Delhi',
        localityUrl: 'ncr/karol-bagh-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/pizza/',
          name: 'Pizza',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/italian/',
          name: 'Italian',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D',
          url: 'https://www.zomato.com/ncr/restaurants/pasta/',
          name: 'Pasta',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/fast-food/',
          name: 'Fast Food',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd',
          url: 'https://www.zomato.com/ncr/restaurants/beverages/',
          name: 'Beverages',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '31 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/la-pinoz-pizza-karol-bagh-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/la-pinoz-pizza-karol-bagh-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '3 km',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20462635","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '6550+ orders placed from here recently',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 18529348,
      name: 'Bhushan Bhature Wala',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/8/18529348/3149ccf3aca68ee19d4cb2542f5d14f4_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/8/18529348/3149ccf3aca68ee19d4cb2542f5d14f4_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.8',
        rating_text: '3.8',
        rating_subtitle: 'Good',
        rating_color: '9ACD32',
        votes: '3,001',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '3.3',
            reviewCount: '16',
            reviewTextSmall: '16 Reviews',
            subtext: '16 Dining Reviews',
            color: '#1C1C1C',
            ratingV2: '3.3',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'green',
              tint: '500',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '4.2',
            reviewCount: '2,985',
            reviewTextSmall: '2,985 Reviews',
            subtext: '2,985 Delivery Reviews',
            color: '#E23744',
            ratingV2: '4.2',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '700',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹150 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Karol Bagh, New Delhi',
        address:
          '3595, 10, Vishnu Mandir Marg, Block 11, Regar Pura, Karol Bagh, New Delhi',
        localityUrl: 'ncr/karol-bagh-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/north-indian/',
          name: 'North Indian',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '25 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/bhushan-bhature-wala-karol-bagh-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/bhushan-bhature-wala-karol-bagh-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '3.6 km',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18529348","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '675+ orders placed from here recently',
      },
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png',
          aspect_ratio: 2.66666666667,
        },
        text: 'Follows all Max Safety measures to ensure your food is safe',
      },
    ],
  },
  {
    type: 'restaurant',
    info: {
      resId: 8671,
      name: 'Hot Pot',
      image: {
        url: 'https://b.zmtcdn.com/data/pictures/1/8671/366ade625e9cf6c8c26bb2420d9a9f99_o2_featured_v2.jpg',
      },
      o2FeaturedImage: {
        url: 'https://b.zmtcdn.com/data/pictures/1/8671/366ade625e9cf6c8c26bb2420d9a9f99_o2_featured_v2.jpg',
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: '3.6',
        rating_text: '3.6',
        rating_subtitle: 'Good',
        rating_color: '9ACD32',
        votes: '2,401',
        subtext: 'REVIEWS',
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: 'DINING',
            rating: '',
            reviewCount: '0',
            reviewTextSmall: '0 Reviews',
            subtext: 'Does not offer Dining',
            color: '',
            ratingV2: '-',
            subtitle: 'DINING',
            sideSubTitle: 'Dining Reviews',
            bgColorV2: {
              type: 'grey',
              tint: '500',
            },
          },
          DELIVERY: {
            rating_type: 'DELIVERY',
            rating: '3.6',
            reviewCount: '2,401',
            reviewTextSmall: '2,401 Reviews',
            subtext: '2,401 Delivery Reviews',
            color: '#E23744',
            ratingV2: '3.6',
            subtitle: 'DELIVERY',
            sideSubTitle: 'Delivery Reviews',
            bgColorV2: {
              type: 'green',
              tint: '600',
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: '₹400 for two',
      },
      cfo: {
        text: '₹250 for one',
      },
      locality: {
        name: 'Rajinder Nagar, New Delhi',
        address: 'Shankar Road Market, Rajinder Nagar, New Delhi',
        localityUrl: 'ncr/rajinder-nagar-delhi-restaurants',
      },
      timing: {
        text: '',
        color: '',
      },
      cuisine: [
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/chinese/',
          name: 'Chinese',
        },
        {
          deeplink:
            'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D',
          url: 'https://www.zomato.com/ncr/restaurants/fast-food/',
          name: 'Fast Food',
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: '₹250 for one',
      },
    },
    order: {
      deliveryTime: '28 min',
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: 'Order Now',
        clickUrl: '/ncr/hot-pot-rajinder-nagar-new-delhi/order',
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: '',
      clickUrl: '/ncr/hot-pot-rajinder-nagar-new-delhi/order',
      clickActionDeeplink: '',
    },
    distance: '3.2 km',
    isPromoted: false,
    promotedText: '',
    trackingData: [
      {
        table_name: 'zsearch_events_log',
        payload:
          '{"search_id":"dccfbf95-f15f-4eb6-a93e-411ddd2e000b","location_type":"delivery_cell","location_id":"4110939063815503872","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"8671","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: '',
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: '50% OFF up to 100',
        color: {
          tint: '500',
          type: 'blue',
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: 'https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png',
        },
        text: '2100+ orders placed from here recently',
      },
    ],
  },
];
