import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Containers
import SectionTitle from "../../components/Shared/SectionTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";

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
        name: "Anonyme",
        post: "Parent d'élève",
        desc:
          "Personnellementn en tant que parent ayant son enfant au Maroc cela me rassuren après les inquiétudes suscitées",
        rating: 4,
      },
      {
        id: 3,
        img: img4,
        name: "Fifi Morgane",
        post: "Lauréate",
        desc:
          "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
        rating: 5,
      },
      {
        id: 4,
        img: img3,
        name: "Ibrahima Faye",
        post: "P.A",
        desc:
          "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        rating: 3,
      },
      {
        id: 5,
        img: img5,
        name: "Mansour Kane",
        post: "Lauréat du Maroc",
        desc:
          "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        rating: 5,
      },
      {
        id: 6,
        img: img6,
        name: "Mapathé Karé",
        post: "étudiant Sénégalais au Maroc",
        desc:
          "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
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
