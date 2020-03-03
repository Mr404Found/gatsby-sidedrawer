import React from "react"
import { Link } from "gatsby"
import "../utils/styles/index.css"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Jumb from "../components/jumb"
import Skills from "../pages/skills"
import {
  TiStarOutline as Fav ,
  FaCanadianMapleLeaf as Can,
} from 'react-icons/fa';

const IndexPage = () => (
  <div>
  <div className="landingPage">
  <SEO title="Welcome" />
  <Sidebar />
  <div className="my-image" style={{width:170}}>
  <Image />
  </div>
  <h6>JO BREED.</h6><br/>
  </div>
  <Skills />
  </div>
)

export default IndexPage