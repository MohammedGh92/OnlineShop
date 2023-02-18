const Data = {
Home:{
    MostOrdered:[
      {
        id:1,
        link:require('./SamplePhotos/Product1-1.png')
      },
      {
        id:2,
        link:require('./SamplePhotos/Product1-2.png')
      },
      {
        id:3,
        link:require('./SamplePhotos/Product1-3.png')
      }
    ]
},
ProductDetails:{
        id:1,
        name:'Pure Beauty',
        images:[
          './SamplePhotos/Product1-1.png',
          './SamplePhotos/Product1-2.png',
          './SamplePhotos/Product1-3.png',
        ],
        oldPrice:200,
        discount:50,
        price:100,
        title:'Product name and some details',
        rating:3,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."

}
};

export default Data;
