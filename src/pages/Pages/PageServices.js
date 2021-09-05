// React Basic and Bootstrap
import React, { Component } from 'react';

//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import WorkProcess from "../ITSolution/WorkProcess";

class PageServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Sutura", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Tutoriel" },
            ],
        }
    }

      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }


    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Tous les processus"
                    pathItems = {this.state.pathItems}
                />
                 <section className="section">
                <WorkProcess />
                </section>

              
            </React.Fragment>
        );
    }
}
export default PageServices;
