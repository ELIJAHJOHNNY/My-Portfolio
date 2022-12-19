// USING MUI CARD
//  import React from "react";
//  import Grid from "@mui/material/Grid";
//  import Card from "@mui/material/Card";
//  import Typography from "@mui/material/Typography";
//  import CardMedia from "@mui/material/CardMedia";
//  import Container from "@mui/material/Container";
//  import netfli2 from "../assets/netfli2.jpg";
//  import IconButton from "@mui/material/IconButton";
//  import OpenInNewIcon from "@mui/icons-material/OpenInNew";
//  import CardContent from "@mui/material/CardContent";

// const Portfolio = () => {
//   return (
//     <div className="h-[100vh]">
//       <Container>
//         <Grid
//           container
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ xs: 4, sm: 8, md: 12 }}
//           className="overflow-hidden"
//         >
//           <Grid item md={4}>
//             <Card
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 flexDirection: "column",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={netfli2}
//                 alt="netflix clone"
//                 className="relative cursor-pointer h-full transition-transform hover:scale-[1.1] duration-[0.5s]"
//               />
//               <CardContent className="bg-gradient-to-t from-[#db1f5e] ">
//                 <Typography
//                   variant="body"
//                   component="div"
//                   sx={{
//                     fontSize: "14px",
//                   }}
//                 >
//                   A Netflix clone created with 'The Movie Database' API which
//                   displays movies of various categories and has a search feature
//                 </Typography>
//                 <IconButton
//                   className=""
//                   href="https://netflix-duplicate.netlify.app/"
//                   target="blank"
//                 >
//                   <OpenInNewIcon
//                     sx={{ fontSize: "26px" }}
//                     className="link rounded-[50%] bg-white w-[60px] h-[60px] p-1 flex items-center justify-center text-[#db1f5e] "
//                   />
//                 </IconButton>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Portfolio;

//USING OVERLAY ON IMAGES EFFECT

import { React, useState } from "react";
import netfli2 from "../assets/netfli2.jpg";
import commerce from "../assets/commerce.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const [workDisplay, setWorkDisplay] = useState(false);

  function toggleDisplay() {
    setWorkDisplay(true);
  }
  return (
    <div>
      <h1 className="text-center font-bold text-[18px] my-[50px]">MY WORKS</h1>
      <Container>
        <div className="h-[100vh]">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="overflow-hidden"
          >
            <Grid item md={4}>
              <div className="work rounded-lg relative overflow-hidden">
                <img
                  src={netfli2}
                  alt="netflix-project"
                  className=" rounded-lg cursor-pointer transition-transform hover:scale-[1.1] duration-[0.5s] "
                  onMouseEnter={() => setWorkDisplay(true)}
                  onMouseLeave={() => setWorkDisplay(false)}
                />
                <div
                  className={workDisplay ? "work-text" : "work-text-hide"}
                  // className="cursor-pointer w-full h-full bg-[#db1f5e] absolute left-0 top-0 flex flex-col text-center px-[40px] items-center justify-center opacity-0 hover:opacity-95"
                  id="layer"
                  onMouseEnter={() => setWorkDisplay(true)}
                  onMouseLeave={() => setWorkDisplay(false)}
                >
                  <h3 className="  font-semibold ">A Netflix clone App</h3>
                  <p className="text-[12px]">
                    A Netflix clone created with 'The Movie Database' API which
                    displays movies of various categories and has a search
                    feature{" "}
                  </p>
                  <a
                    href="https://netflix-duplicate.netlify.app/"
                    target="blank"
                    className="link rounded-[50%] bg-white w-[40px] h-[40px] flex items-center justify-center text-[#db1f5e]"
                  >
                    <OpenInNewIcon className="" />
                  </a>
                </div>
              </div>
            </Grid>

            <Grid item md={4}>
              <div
                className="work rounded-lg relative overflow-hidden"
                rowid={2}
              >
                <img
                  src={commerce}
                  alt="netflix-project"
                  className=" rounded-lg cursor-pointer transition-transform hover:scale-[1.1] duration-[0.5s] "
                  onMouseEnter={() => setWorkDisplay(true)}
                  onMouseLeave={() => setWorkDisplay(false)}
                />
                <div
                  className={workDisplay ? "work-text" : "work-text-hide"}
                  id="layer"
                  onMouseEnter={() => setWorkDisplay(true)}
                  onMouseLeave={() => setWorkDisplay(false)}
                >
                  <h3 className="  font-semibold ">A Netflix clone App</h3>
                  <p className="text-[12px]">
                    A Netflix clone created with 'The Movie Database' API which
                    displays movies of various categories and has a search
                    feature{" "}
                  </p>
                  <a
                    href="https://netflix-duplicate.netlify.app/"
                    target="blank"
                    className="link rounded-[50%] bg-white w-[40px] h-[40px] flex items-center justify-center text-[#db1f5e]"
                  >
                    <OpenInNewIcon className="" />
                  </a>
                </div>
              </div>
            </Grid>

            <Grid item md={4} className="work">
              <img
                src={netfli2}
                alt="netflix-project"
                onMouseEnter={() => setWorkDisplay(true)}
                onMouseLeave={() => setWorkDisplay(false)}
              />
              <div
                className={workDisplay ? "work-text" : "work-text-hide"}
                onMouseEnter={() => setWorkDisplay(true)}
                onMouseLeave={() => setWorkDisplay(false)}
              >
                <h3 className="  font-semibold mb-[20px]">
                  A Netflix clone App
                </h3>
                <p>
                  A Netflix clone created with 'The Movie Database' API which
                  displays movies of various categories and has a search feature{" "}
                </p>
                <a href="https://netflix-duplicate.netlify.app/" target="blank">
                  <OpenInNewIcon className="" />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;

// import React from "react";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import "antd/dist/antd.min.css";
// import { Carousel } from "antd";
// import { Card } from "antd";
// import netfli2 from "../assets/netfli2.jpg";
// import commerce from "../assets/commerce.png";
// import Grid from "@mui/material/Grid";
// import { Button } from "antd";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// const { Meta } = Card;
// const contentStyle = {
//   background: "#364d79",
//   overflow: "hidden",
// };

// const Portfolio = () => {
//   return (
//     <div className="h-[100vh] w-[100%]">
//       <h1 className="text-center text-[20px] font-[700] font-Raleway mb-4 flex items-center justify-center text-[#7600bc] ">
//         MY WORKS
//       </h1>
//       <Container className="h-[100vh] ">
//         <Grid
//           container
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ xs: 4, sm: 8, md: 12 }}
//         >
{
  /* <Carousel
          autoplay
          pauseOnHover
          pauseOnDotsHover
          dots={true}
          dotPosition="bottom"
        > */
}
// <Grid item sm={12} md={4}>
//   <Card
//     // hoverable
//     style={{
//       width: 300,
//     }}
//     // className="hover:shadow-md hover:shadow-[#db1f5e] duration-500 transition-shadow "
//     cover={<img alt="A Netflix clone" src={netfli2} />}
//   >
//     <Meta
//       title="Netflix clone"
//       description=""
//       className="flex items-center justify-center text-center "
//     />
//     <div className="flex items-center justify-center text-center m-1">
//       <a
//         href="https://netflix-duplicate.netlify.app/"
//         target="blank"
//         className="rounded-[50%] bg-[#db1f5e] w-[30px] h-[30px] flex items-center justify-center text-white text-center"
//       >
//         <OpenInNewIcon className="w-[25px] h-[25px] " />
//       </a>
//     </div>
//   </Card>
// </Grid>

// <Grid item sm={12} md={4}>
//   <Card
//     hoverable
//     style={{
//       width: 300,
//     }}
//     cover={<img alt="example" src={commerce} />}
//   >
//     <Meta
//       title="E-Commerce App"
//       description=""
//       className="flex items-center justify-center text-center "
//     />
{
  /* <Button
              type="primary"
              shape="circle"
              icon={<DownloadOutlined />}
              size={size}
            /> */
}
//               <div className="flex items-center justify-center text-center ">
//                 <a
//                   href="https://netflix-duplicate.netlify.app/"
//                   target="blank"
//                   className="rounded-[50%] bg-[#db1f5e] w-[30px] h-[30px] flex items-center justify-center text-white text-center"
//                 >
//                   <OpenInNewIcon className="w-[25px] h-[25px] flex items-center justify-center text-center" />
//                 </a>
//               </div>
//             </Card>
//           </Grid>

//           {/* </Carousel> */}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Portfolio;
