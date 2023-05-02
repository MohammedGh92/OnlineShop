const Data = {
  ProductDetails: {
    id: 1,
    name: 'Pans collection',
    images: [
      require('./SamplePhotos/Product1-1.png'),
      require('./SamplePhotos/Product1-2.png'),
      require('./SamplePhotos/Product1-3.jpg'),
    ],
    oldPrice: 200,
    discount: 50,
    price: 100,
    title: 'Product name and some details',
    rating: 4,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."

  },
  Sections: [
    {
      id: 1,
      name: 'Electronic Devices',
      image: require('./SamplePhotos/Section1.jpg'),
      subSections: [
        {
          id: 1,
          name: 'All Products',
          image: require('./SamplePhotos/Section1-1.jpg'),
        },
        {
          id: 2,
          name: 'Healthy Tools',
          image: require('./SamplePhotos/Section1-2.jpg'),
        },
        {
          id: 3,
          name: 'Lights',
          image: require('./SamplePhotos/Section1-3.jpg'),
        },
        {
          id: 4,
          name: 'Home Decors',
          image: require('./SamplePhotos/Section1-4.jpg'),
        },
        {
          id: 5,
          name: 'Kitchen',
          image: require('./SamplePhotos/Section1-5.jpg'),
        }
      ]
    }, {
      id: 2,
      name: 'Home And Kitchen',
      image: require('./SamplePhotos/Section2.jpg'),
      subSections: [
        {
          id: 1,
          name: 'All Products',
          image: require('./SamplePhotos/Section2.jpg'),
        }
      ]
    }, {
      id: 3,
      name: 'Home Furniture',
      image: require('./SamplePhotos/Section3.jpg'),
      subSections: [
        {
          id: 1,
          name: 'All Products',
          image: require('./SamplePhotos/Section3.jpg'),
        }
      ]
    }, {
      id: 4,
      name: 'Fitness',
      image: require('./SamplePhotos/Section4.jpg'),
      subSections: [
        {
          id: 1,
          name: 'All Products',
          image: require('./SamplePhotos/Section4.jpg'),
        }
      ]
    }, {
      id: 5,
      name: 'Beauty And Care',
      image: require('./SamplePhotos/Section5.jpg'),
      subSections: [
        {
          id: 1,
          name: 'All Products',
          image: require('./SamplePhotos/Section5.jpg'),
        }
      ]
    }, {
      id: 6,
      name: 'Electronics',
      image: require('./SamplePhotos/Section6.jpg'),
      subSections: [
        {
          id: 1,
          name: 'All Products',
          image: require('./SamplePhotos/Section6.jpg'),
        }
      ]
    }
  ]
};

export default Data;