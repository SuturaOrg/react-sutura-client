import React from "react";
const Donation = React.lazy(() => import("./pages/Pages/Utility/Donate"));
const ContributeRequest = React.lazy(() => import("./pages/ITSolution/operations/ContributeRequest"));
const LoanRequest = React.lazy(() => import("./pages/ITSolution/operations/LoanRequest"));
const RefundRequest = React.lazy(() => import("./pages/ITSolution/operations/RefundRequest"));

const SignupSubmitConfirmation= React.lazy(() => import("./pages/ITSolution/confirmations/SignupSubmitConfirmation"));
const LoanSubmitConfirmation= React.lazy(() => import("./pages/ITSolution/confirmations/LoanSubmitConfirmation"));
const ContributionSubmitConfirmation= React.lazy(() => import("./pages/ITSolution/confirmations/ContributionSubmitConfirmation"));
const RefundSubmitConfirmation= React.lazy(() => import("./pages/ITSolution/confirmations/RefundSubmitConfirmation"));
const RegistrationSubmitConfirmation= React.lazy(() => import("./pages/ITSolution/confirmations/RegistrationSubmitConfirmation"));
const RegistrationSuccessConfirmation= React.lazy(() => import("./pages/ITSolution/confirmations/RegistrationSuccessConfirmation"));

// Root Include
const Root = React.lazy(() => import("./pages/Home/indexRoot"));

//Main Index
// const Main = React.lazy(() => import("./pages/Home/indexMain"));

//Special
const PageComingSoon = React.lazy(() =>
  import("./pages/Pages/Special/PageComingSoon")
);
const PageComingSoon2 = React.lazy(() =>
  import("./pages/Pages/Special/PageComingSoon2")
);
const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() =>
  import("./pages/Pages/Special/PageThankYou")
);
const PageMaintenance = React.lazy(() =>
  import("./pages/Pages/Special/PageMaintenance")
);

//Auth Pages
const PageLogin = React.lazy(() => import("./pages/Pages/AuthPages/PageLogin"));
const PageCoverLogin = React.lazy(() =>
  import("./pages/ITSolution/auth/PageCoverLogin")
);
const PageLoginThree = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageLoginThree")
);

const PageSignup = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageSignup")
);
const PageCoverSignup = React.lazy(() =>
  import("./pages/ITSolution/auth/PageCoverSignup")
);
const PageSignupThree = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageSignupThree")
);

const PageCoverRePassword = React.lazy(() =>
  import("./pages/ITSolution/auth/PageCoverRePassword")
);
const PageRecoveryPassword = React.lazy(() =>
  import("./pages/ITSolution/auth/PageRecoveryPassword")
);
const PageRePasswordThree = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageRePasswordThree")
);

const ITSolution = React.lazy(() => import("./pages/ITSolution/index"));

//Docs
const ChangeLog = React.lazy(() => import("./pages/Docs/ChangeLog"));
const Components = React.lazy(() => import("./pages/Docs/Components"));
const Documentation = React.lazy(() => import("./pages/Docs/Documentation"));
const Widget = React.lazy(() => import("./pages/Docs/widget"));

const PageAboutUs = React.lazy(() => import("./pages/Pages/PageAboutUs"));
const PageAboutusTwo = React.lazy(() => import("./pages/Pages/PageAboutusTwo"));

const PageContributions = React.lazy(() => import("./pages/ITSolution/profile/PageContributions"));
const PageLoans = React.lazy(() => import("./pages/ITSolution/profile/PageLoans"));
const PageRefunds = React.lazy(() => import("./pages/ITSolution/profile/PageRefunds"));
//const PagePricing = React.lazy(() => import("./pages/Pages/PagePricing"));
const PageServices = React.lazy(() => import("./pages/Pages/PageServices"));
const PageTeam = React.lazy(() => import("./pages/Pages/PageTeam"));

//Account
const PageProfile = React.lazy(() =>
  import("./pages/ITSolution/profile/PageProfile")
);
const PageProfileEdit = React.lazy(() =>
  import("./pages/ITSolution/profile/PageProfileEdit")
);
// const PagePayments = React.lazy(() =>
//   import("./pages/ITSolution/profile/PagePayments")
// );
const PageInvoice = React.lazy(() =>
  import("./pages/ITSolution/email/PageInvoice")
);

//Blog
// const PageBlog = React.lazy(() => import("./pages/Pages/Blog/PageBlog"));
// const PageBlogDetail = React.lazy(() =>
//   import("./pages/Pages/Blog/PageBlogDetail")
// );
// const PageBlogDetailTwo = React.lazy(() =>
//   import("./pages/Pages/Blog/PageBlogDetailTwo")
// );
// const PageBlogSidebar = React.lazy(() =>
//   import("./pages/Pages/Blog/PageBlogSidebar")
// );
// const PageBlogList = React.lazy(() =>
//   import("./pages/Pages/Blog/PageBlogList")
// );
// const PageBlogListSidebar = React.lazy(() =>
//   import("./pages/Pages/Blog/PageBlogListSidebar")
// );

//Utility
const PagePrivacy = React.lazy(() =>
  import("./pages/Pages/Utility/PagePrivacy")
);
const PageTerms = React.lazy(() => import("./pages/Pages/Utility/PageTerms"));

//Contact
const PageContactDetail = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactDetail")
);
const PageContactOne = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactOne")
);
const PageContactThree = React.lazy(() =>
  import("./pages/ITSolution/PageContactThree")
);
const PageContactTwo = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactTwo")
);

//Email
const EmailAlert = React.lazy(() =>
  import("./pages/ITSolution/email/EmailAlert")
);
const EmailPasswordReset = React.lazy(() =>
  import("./pages/ITSolution/email/EmailPasswordReset")
);
const EmailConfirmation = React.lazy(() =>
  import("./pages/ITSolution/email/EmailConfirmation")
);
const EmailInvoice = React.lazy(() =>
  import("./pages/ITSolution/email/EmailInvoice")
);

const routes = [
  //routes without Layout

  //Email Pages
  { path: "/email-alert", component: EmailAlert, isWithoutLayout: true },
  {
    path: "/email-password-reset",
    component: EmailPasswordReset,
    isWithoutLayout: true,
  },
  {
    path: "/email-confirmation",
    component: EmailConfirmation,
    isWithoutLayout: true,
  },
  { path: "/email-invoice", component: EmailInvoice, isWithoutLayout: true },

  //Special Pages
  {
    path: "/page-comingsoon",
    component: PageComingSoon,
    isWithoutLayout: true,
  },
  {
    path: "/page-comingsoon2",
    component: PageComingSoon2,
    isWithoutLayout: true,
  },
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },
  {
    path: "/page-maintenance",
    component: PageMaintenance,
    isWithoutLayout: true,
  },

  //User Pages
  {
    path: "/login",
    component: PageCoverLogin,
    isWithoutLayout: true,
  },
  {
    path: "/signup",
    component: PageCoverSignup,
    isWithoutLayout: true,
  },

  { path: "/index-it-solution", component: ITSolution },

  { path: "/page-aboutus", component: PageAboutUs, isTopbarDark: true },
  { path: "/about-team", component: PageAboutusTwo },
  //{ path: "/page-history", component: PageHistory, isTopbarDark: true },
  //{ path: "/page-pricing", component: PagePricing, isTopbarDark: true },
  { path: "/tutorial", component: PageServices, isTopbarDark: true },
  { path: "/page-team", component: PageTeam, isTopbarDark: true },

  //Utility
  { path: "/page-terms", component: PageTerms, isTopbarDark: true },
  { path: "/aboutus", component: PagePrivacy, isTopbarDark: true },

  //Page Profile
  { path: "/page-profile", component: PageProfile, isPrivate:true },
  // { path: "/page-members", component: PageMembers },
  // { path: "/page-works", component: PageWorks },
  { path: "/page-contributions", component: PageContributions },
  { path: "/page-loans", component: PageLoans },
  { path: "/page-refunds", component: PageRefunds },
  { path: "/page-profile-edit", component: PageProfileEdit },
  // { path: "/page-payments", component: PagePayments },
  { path: "/page-invoice", component: PageInvoice, isTopbarDark: true },

  //Page Blog
  // { path: "/page-blog-grid", component: PageBlog, isTopbarDark: true },
  // { path: "/page-blog-detail", component: PageBlogDetail, isTopbarDark: true },
  // { path: "/page-blog-detail-two", component: PageBlogDetailTwo },
  // { path: "/page-blog-sidebar", component: PageBlogSidebar, isTopbarDark: true },
  // { path: "/page-blog-list", component: PageBlogList, isTopbarDark: true },
  // { path: "/page-blog-list-sidebar", component: PageBlogListSidebar, isTopbarDark: true },

  //Page Contact
  { path: "/contact", component: PageContactThree, isTopbarDark: true },

  //Docs
  { path: "/changelog", component: ChangeLog, isTopbarDark: true },
  { path: "/components", component: Components, isTopbarDark: true },
  { path: "/documentation", component: Documentation, isTopbarDark: true },
  { path: "/widget", component: Widget, isTopbarDark: true },

  //Index Main
  { path: "/", component: ITSolution},
  // { path: "/index2", component: iTSolutionTwo },
  { path: "/tos", component: PageTerms },
  { path: "/about-team", component: PageAboutUs },
  { path: "/donate", component: Donation, isTopbarDark: true },
  { path: "/operations/contribute", component: ContributeRequest, isTopbarDark: true },
  { path: "/operations/askloan", component: LoanRequest, isTopbarDark: true },
  { path: "/operations/refund", component: RefundRequest, isTopbarDark: true },

  { path: "/signup-confirmation", component: SignupSubmitConfirmation, isTopbarDark: true },
  { path: "/loan-confirmation", component: LoanSubmitConfirmation, isTopbarDark: true },
  { path: "/contribution-confirmation", component: ContributionSubmitConfirmation, isTopbarDark: true },
  { path: "/refund-confirmation", component: RefundSubmitConfirmation, isTopbarDark: true },
  { path: "/registration-confirmation", component: RegistrationSubmitConfirmation, isTopbarDark: true },
  { path: "/registration-success-confirmation", component: RegistrationSuccessConfirmation, isTopbarDark: true },


  //Index root
  //{ path: "/", component: Root, isWithoutLayout: true, exact: true },
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
