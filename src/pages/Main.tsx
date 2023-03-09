import { useEffect, useState, FC } from "react";
import "./Main.css";
import { GiWeightLiftingUp, GiWeightScale, GiShinyApple } from "react-icons/gi";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import GoogleMapReact from "google-map-react";

const Main = () => {
  return (
    <div className="container">
      <Element name="landing" className="banner image1">
        <p
          style={{ gridColumn: "2/6", gridRow: "3/4", fontSize: "3.5rem" }}
          className="title"
        >
          Персональные тренировки
        </p>
        <p
          className="text"
          style={{
            color: "white",
            textAlign: "left",
            gridColumn: "2/6",
            gridRow: "4/5",
          }}
        >
          РАЗРУШАЙТЕСЬ, ВОЗЬМИТЕ КОНТРОЛЬ, ЖИВИТЕ ЦЕЛЬЮ И ЗАРАБАТЫВАЙТЕ БОЛЬШЕ ДЕНЕГ.
        </p>
      </Element>
      <div className="divider" style={{ height: "3vh" }}></div>
      <Element name="services" className="section-wrapper">
        <p className="title">БУДЬ ЛУЧШЕЙ ВЕРСИЕЙ СЕБЯ</p>
        <p className="text">
          Персональные тренировки помогут вам достичь ваших целей в области
          здоровья и фитнеса, какими бы они ни были. Если вы хотите похудеть,
          привести себя в тонус, нарастить мышечную массу или просто вести более
          здоровый образ жизни, персональный тренер поможет вам в этом. Даже
          если у вас плотный график или вы с трудом достигали своих целей в
          фитнесе в прошлом, персональные тренировки могут обеспечить гибкость и
          индивидуальное руководство, необходимое для достижения успеха.
        </p>
        <IconContext.Provider value={{ size: "5rem" }}>
          <div className="card-container">
            <Card
              title="СПОРТИВНАЯ ФИГУРА"
              content="Получите спортивную фигуру, о которой вы всегда мечтали, 
              благодаря персонализированным тренировкам по фитнесу. Возьмите под контроль 
              свое здоровье и физическую форму сегодня с экспертным руководством и поддержкой."
              icon={<GiShinyApple />}
            ></Card>
            <Card
              title="УВЕРЕННОСТЬ"
              content="Мы фокусируемся не только на изображении в зеркале, но и на том,
              как вы себя чувствуете. Достижение вех с вашим телом перенесется
              в вашу повседневную жизнь как повышение уверенности."
              icon={<GiWeightScale />}
            ></Card>
            <Card
              title="КАЧЕСТВО ЖИЗНИ"
              content="Конечная цель состоит в том, чтобы вы могли в полной мере
              наслаждаться жизнью, уверенно участвовать в социальных ситуациях
              , которые вы всегда хотели, без ограничений вашего тела."
              icon={<GiWeightLiftingUp />}
            ></Card>
          </div>
        </IconContext.Provider>
      </Element>
      <div className="divider" style={{ height: "3vh" }}></div>
      <Element name="about" className="banner image2"></Element>
      <div className="divider" style={{ height: "3vh" }}></div>

      <Element
        name="clients"
        className="section-wrapper"
        // style={{ height: "80vh" }}
      >
        <p className="title">КЛИЕНТЫ</p>
        <p className="text">
          Посмотрите, каких потрясающих изменений добились наши персональные
          тренировки с нашими клиентами! Эти фотографии до и после демонстрируют
          тяжелую работу и самоотверженность как наших тренеров, так и клиентов.
          Позвольте нам помочь вам достичь ваших целей в фитнесе и обрести тело,
          о котором вы всегда мечтали. Свяжитесь с нами, чтобы узнать больше и
          начать свое путешествие сегодня
        </p>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows
          dynamicHeight
          showStatus={false}
          showThumbs={false}
          className="carousel-holder"
        >
          <div>
            <img src="/images/1.png" alt="" />
          </div>
          <div>
            <img src="/images/2.png" alt="" />
          </div>
          <div>
            <img src="/images/3.png" alt="" />
          </div>
        </Carousel>
      </Element>
      <div className="divider" style={{ height: "3vh" }}></div>
      <Element
        name="contacts"
        className="banner image3"
        style={{ height: "100vh" }}
      >
        <GoogleMapReact></GoogleMapReact>
      </Element>
    </div>
  );
};
type Coordinates = {
  lat: number;
  lng: number;
};
const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      {props.icon}
      <div className="card-title">{props.title}</div>
      <p>{props.content} </p>
    </div>
  );
};

interface CardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export default Main;
