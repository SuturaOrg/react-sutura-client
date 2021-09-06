import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Containers
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/reviews/ountou.jpg";
import img2 from "../../assets/images/reviews/mansour.jpg";
import img3 from "../../assets/images/reviews/moussa.jpg";
import img4 from "../../assets/images/reviews/naby.jpg";
import img5 from "../../assets/images/reviews/daba.jpg";
import img6 from "../../assets/images/reviews/frey.jpg";

class Reviews extends Component {
  state = {
    reviews: [
      {
        id: 1,
        img: img1,
        name: "Ountou Sène",
        post: "Lauréat du Maroc et jeune cadre bancaire",
        desc:
          "Sutura est une plate-forme qui met en avant les valeurs humaines: solidarité et discrétion. Ce qui je trouve pertinent, mais il l'est encore plus car c'est un modèle conçu par des étudiants et pour les étudiants. Je félicite l'idée car, cela prouve qu'eux-mêmes sont conscients de l'importance du bien-être pour mener des études stables et sérieuses dans de bonnes conditions.",
        rating: 5,
      },
      {
        id: 2,
        img: img2,
        name: "M. Mansour Kane",
        post: "Lauréat du Maroc",
        desc:
          "Une bonne santé est primordiale pour tout étudiant. En effet, pour être au meilleur de soi, ce dernier a besoin d’assurer ses services sociaux de base. C’est en ce sens que sutura joue un rôle prépondérant. Elle permet non seulement à l’étudiant ne disposant pas des moyens nécessaires de se soigner mais surtout, dans la dignité. Plus besoin d’emprunter ça et là; de courir derrière une assurance « non assurée ». Le concept est simple et pratique : s’aider en aidant les autres !",
        rating: 5,
      },
      {
        id: 3,
        img: img3,
        name: "Moussa Diongue",
        post: "Ingénieur, lauréat",
        desc:
          "Depuis son lancement, Sutura est venu en aide à beaucoup d'étudiants subsahariens du public comme du privée en allégeant leurs frais de scolarité, de soins médicaux, de logement et de déplacements. Conçu sur mesure pour répondre aux besoins pressants des étudiants dans la discrétion et le respect total de la dignité humaine. Sutura, pour vous et grâce à vous.",
        rating: 4,
      },
      {
        id: 4,
        img: img4,
        name: "Naby Ndiaye",
        post: "Doctorant",
        desc:
          "Sutura est une solution qui est arrivée à un moment crucial. L'idée est vriament extraordinaire en plus d'avoir une dimension sociale, elle met en avant les valeurs humaines comme l'entraide.",
        rating: 3,
      },
      {
        id: 5,
        img: img5,
        name: "Daba Sarr",
        post: "Etudiante",
        desc:
          "Je salue la belle initiative Sutura, pensée par des étudiants engagés et soucieux des conditions de vie et d’étude des étudiants étrangers au maroc. Grâce à la plate-forme Sutura, les étudiants beneficieront d’une meilleure prise en charge en cas de besoin.",
        rating: 4,
      },
      {
        id: 6,
        img: img6,
        name: "Frey Moukassa",
        post: "Etudiant",
        desc:
          "Sutura est une plateforme qui place l'étudiant au coeur de ses actions pour améliorer la prise en charge de ces derniers,étant conçu par des étudiants et au vu des valeurs qu'elle prône,elle est sans doute ce qu'il faut pour chaque étudiant en matière de prise en charge. Je loue l'initiative et  recommande vivement.",
        rating: 5,
      },
      {
        id: 7,
        img: img6,
        name: "Anonyme",
        post: "Parent d'élève",
        desc:
          "Personnellementn en tant que parent ayant son enfant au Maroc cela me rassuren après les inquiétudes suscitées",
        rating: 4,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Témoignages"
            desc="c'est s'aider soi-même mais aussi aider d'autres personnes qui sont dans la même situation que nous."
          />

          {/* clients slider */}
          <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
        </Container>
      </React.Fragment>
    );
  }
}

export default Reviews;
