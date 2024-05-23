import React, { useEffect } from 'react';

const BgCollorChange = () => {
  useEffect(() => {
    const section = document.querySelector("section");
    const images = document.querySelectorAll("img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            section.style.backgroundColor = entry.target.getAttribute("data-color");
          }
        });
      },
      {
        threshold: 0.7
      }
    );

    images.forEach((el, i) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div id='first' style={{display:'flex'}}>
    <section >
      <img
        src="https://img.freepik.com/premium-photo/panoramic-photography-lush-green-tea-plantation-plantation-is-covered-with-vibrant-green_136558-40942.jpg?w=900"
        data-color="#65fe08"
      />
      <img
        src="https://tramptraveller.com/wp-content/uploads/2020/12/Untitled-1-10-800x400.jpg"
        data-color="#FF1493"
     style={{width:'45%',height:'650px'}} />
      <img
        src="https://th.bing.com/th/id/R.b71f022171098ca015b8a782a76d510d?rik=aed3qM02Gju7Tw&riu=http%3a%2f%2fwww.ttdconline.com%2f_next%2fboat-house%2footy%2f1.jpg&ehk=slzeRWnEmURYmMeSR3oLz6nEuE24bVeKA0sWTQj0%2f4A%3d&risl=&pid=ImgRaw&r=0"
        data-color="#3c94c5"
      />
      <img
        src="https://i.ytimg.com/vi/IWuIsSUeBik/maxresdefault.jpg"
        data-color="#8E44AD"
      />
      <img
        src="https://as2.ftcdn.net/v2/jpg/04/04/75/71/1000_F_404757144_SA1aBpr3oRPTtwKrYui7YkqeB12b1VrK.jpg"
        data-color="#99aba0"
      />
      <img
        src="https://lushbergskotagiri.com/assets/img/Kotagiri-tourist-places.png"
        data-color="#b0e6db"
      />
      <img
        src="https://www.greennest.in/wp-content/uploads/2019/06/Ooty-Summer-Festival-20191.jpg"
        data-color="#fe6f62"
      />
      <img
        src="https://pbs.twimg.com/media/FvbLVsmXgAEQe1Y?format=jpg&name=medium"
        data-color="#EDD7BE"
  />

    <img
      src="https://clubmahindra.gumlet.io/blog/images/Ooty-Coonoor-Toy-train.jpg?w=800&dpr=1.0"
      data-color="#dcdcdc"
    />
  </section>
  </div>
  );
};

export default BgCollorChange;

