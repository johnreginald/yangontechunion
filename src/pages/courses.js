import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Instructor from '../components/Instructor'
import { Link, graphql } from 'gatsby'

class CoursesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const profile = data.avatar.childImageSharp.fixed

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div className="banner">
            <div className="container mx-auto">
                <div className="course">
                    <div className="name">Professional Web Development Course</div>
                    <div className="slogan">Learn Web Development Skill and Create Beautiful Website</div>
                </div>
            </div>
        </div>

        <div className="instructor">
            <div className="flex container mt-10 mx-auto">
                <div className="w-1/2 text-center">
                    <Instructor />
                </div>

                <div className="w-1/2">
                    <div className="card">
                        <h1 className="about">About Course Instructor</h1>

                        <p className="mm text-justify">
                            Professional Web Development Course ကို တာဝန်ယူသင်ကြားပေးမဲ့ ဆရာကတော့ ကိုထက်ဝေယံစိုးဖြစ်ပါတယ်။ Computer Service Technician အဖြစ် ၃ နှစ်ခန့် အသက်မွေးခဲ့ပြီး Web Development ကို <a href="http://cs75.tv" target="_blank">CS 75</a> မှ တဆင့်သင်ယူခဲ့ပါတယ်။ ၂၀၁၁ ခန့်မှ စတင်ပြီး Freelance Web Developer အဖြစ်နဲ့ ရပ်တည်နေတာ ယခုထိပါပဲ။ Linux Server, MySQL Database Server, Software and Web Development နဲ့ ပတ်သက်ပြီး အတွေ့အကြုံရှိသူတစ်ယောက်ဖြစ်ပါတယ်။ February 2015 မှာ Professional Web Development Course ကို The Cyber Wings Team မှာစတင်သင်ကြားခဲ့ပါတယ်။ သင်ရိုးကို တဖြည်းဖြည်း မြှင့်တင်လာခဲ့တာ အခုဆိုရင် Professional Web Development Level 1 နဲ့ Level 2 ဆိုပြီး Level နှစ်ခုခွဲထားပြီး Web Development အတွက် Course နှစ်ခုလုံးဟာ ပြီးပြည့်စုံပြီး လူတိုင်းအတွက် သင်ယူရ လွယ်ကူပြီး အဆင်ပြေတဲ့ ကိုယ်ပိုင် "Authentic" Course တွေ ဖြစ်နေပါပြီ။ ဆရာကလဲ သင်ကြားရေးအပိုင်းကို သေချာအာရုံ စူးစိုက်ထားသူမို့ သင်ယူသူ နားလည်စေမဲ့ ဥပမာတွေနဲ့ ရှင်းပြပေးနိုင်ပါတယ်။
                        </p>							
                    </div>
                </div>
            </div>	
        </div>

        <div className="course-banner">
            <h1 className="wow fadeInUp" data-wow-duration="2s">What is Professional Web Development Course?</h1>
        </div>

        <div className="course">
            <div className="container mx-auto">

                <div className="card">
                    <p className="mm pb-5">  
                        Programming Language ကို ဉာဏ်ကောင်းမှ လေ့လာလို့ ရမယ်။ လေ့လာရတာ ခက်ခဲတယ်လို့ ထင်ရင် မှားပါတယ်။ အခြေခံပညာအထက်တန်း သင်္ချာတွက်တတ်ပြီး Computer ဘယ်လို အလုပ်လုပ်လဲ ဆိုတာ သင်ပြီးရင် Computer Program တစ်ခုကောင်းကောင်းရေးနိုင်ပါတယ်။  ပြီးတော့ တော်တော်များများ ကြောက်ကြတဲ့ လေနဲ့ ဝမ်း မကွဲကျတဲ့ Object Oriendted Programming ( OOP ) ဆိုတာလဲ ဘာကြောင့်သုံးလဲ ဘယ်လို သုံးရမယ်ဆိုတာ သိရင် မခက်ပါဘူး။ Linux ဆိုတာလဲ Command line တွေနဲ့ဆိုပြီး မကြောက်ပါနဲ့။ ကျနော်တို့ Linux မှန်းမသိပဲ နေ့စဉ်သုံးနေကြတာပါ။
                    </p>

                    <p className="mm pb-5">
                        ယခုခေတ်ပေါ်  Programming Language တွေဟာ သင်ယူရတာ လွယ်ကူပေမဲ့  သေသေချာချာ တတ်ကျွမ်းဖို့ကိုတော့ အင်မတန် ပြင်းပြတဲ့ စိတ်နဲ့   အထပ်ထပ်အခါခါ လေ့ကျင့် လေ့လာရပါလိမ့်မယ်။ လမ်းမမှားအောင် Guide လုပ်ပေးမဲ့ ဆရာလဲ လိုအပ်ပါတယ်။ ဒီသင်တန်းမှာ Web Development Technology တွေကို GNU / Linux OS သုံးပြီး Website တွေ Web Application တွေရေးနိုင်၊ အသက်မွေးဝမ်းကျောင်း ပြုနိုင်သည်အထိ လွယ်ကူရှင်းလင်းတဲ့ ဥပမာတွေနဲ့ သင်ပေးမယ်။
                    </p>

                    <p className="mm pb-5">
                        Professional Web Development Course အတွက် Level 1 နဲ့ Level 2 ဆိုပြီး ၂ ခုခွဲထားပါတယ်။ Level 1 Course အတွက် Programming အခြေခံနဲ့ Linux အခြေခံ ရှိထားစရာမလိုပါ။ ကွန်ပြူတာကို အတော်အသင့် သုံးတတ်ပြီး Internet and Email ကျွမ်းကျွမ်းကျင်ကျင် သုံးတတ်ရင် ရပါပြီ။ Level 2 သင်တန်းကတော့ Programming အခြေခံရှိထားဖို့ လိုအပ်ပါတယ်။ သင်တန်းနေရာက တိုက် ၃၃၊ တတိယထပ် ၊ စမ်းချောင်း ဂွစျေးနားက ဇလွန်လမ်းမှာပါ။ ဘယ်အတန်းတက်ရမလဲ မသေချာရင် သင်တန်းကို လာရောက်ဆွေးနွေးနိုင်ပါတယ်။ သင်တန်းတိုင်းအတွက် ကိုယ်ပိုင် Laptop, Internet ယူဆောင်လာရပါမည်။
                    </p>

                    <h3 className="text-center text-red mm">“အသက်မွေးဝမ်းကျောင်း ပညာတစ်ရပ်ဖြစ်လို့ သင်တန်းပြီးသွားလဲ အမြဲတမ်း အချိန်ပေးပြီး လေ့လာရပါမယ်”</h3>
                </div>
            </div>
        </div>

        <div className="level-1">
            <h1>Professional Web Development Course ( Level 1 )</h1>
        </div>

        <div className="course">
            <div className="container mx-auto">
                <div className="card">

                    <h2>Course Syllabus</h2>
                    <ol>
                        <li>Introduction to Web Technology</li>
                        <li>HTML, CSS</li>
                        <li>Bootstrap CSS Framework</li>
                        <li>Introduction to Programming Language</li>
                        <li>Javascript</li>
                        <li>Functional Programming</li>
                        <li>JQuery</li>
                    </ol>

                    <h2>Course Description</h2>
                    <p className="mm text-justify">
                        Web Development ကို ယခုမှ စတင်လေ့လာမည့် သူများအတွက် သင့်တော်ပါသည်။ HTML, CSS ဖြင့် သတင်းအချက်အလက်ဖော်ပြသည့် Website များတည်ဆောက်ခြင်းကို သင်ကြားပေးမည်။ Javascript ကိုသုံးပြီး Programming Language များ၏ သိသင့်သိထိုက်သည်များကို အဆင့်ဆင့် သင်ကြားပေးမည်။ သင်တန်းပြီးဆုံးလျှင် သတင်းအချက်အလက်ဖော်ပြသည့် Website များ ရေးသားနိုင်မည်။ Programming Language ကို အခြေခံကောင်းကောင်းရသွားမည်။
                    </p>
                    
                    <ul className="mm">
                        <li>Internet, Email, Computer အသုံးပြုတတ်လျှင် မည်သူမဆို တက်နိုင်ပါသည်။</li>
                        <li>သတင်းအချက်အလက်ဖော်ပြသည့် Website ၁ ခု ကို Project အနေဖြင့် ရေးသားရမည်။</li>
                        <li>သင်တန်းကြေး ကျပ် ၁၀၀,၀၀၀ ။ </li>
                        <li>သင်တန်းကြာချိန် ၂ လ ၊ တပတ်လျှင် နှစ်ရက် စုစုပေါင်း နာရီ ၃၀+ သင်ကြားမည်။ </li>
                        <li>တန်းခွဲ တစ်ခုလျှင် သင်တန်းသား စုစုပေါင်း ၂၀ ယောက် လက်ခံပါမည်။</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="level-2">
            <h1>Professional Web Development Course ( Level 2 )</h1>
        </div>

        <div className="course">
            <div className="container mx-auto">
                <div className="card">

                    <h2>Course Syllabus</h2>

                    <ul>
                        <li>Development Environment Setup</li>
                        <li>Server Client Architecture</li>
                        <li>PHP Programming Language</li>
                        <li>Functional Programming</li>
                        <li>Object Oriented Programming</li>
                        <li>MySQL Database</li>
                        <li>PHP ORM</li>
                        <li>Git</li>
                        <li>API</li>
                        <li>Design Pattern</li>
                        <li>Laravel Web Framework</li>
                    </ul>

                    <h2>Course Description</h2>
                    
                    <p className="mm text-justify">
                        PHP (​ Object-oriented Programming ) ကို အဓိကထားပြီး သင်ကြားသည်။ Laravel Web Framework ကို အသုံးပြုပြီး Web Application များ တည်ဆောက်တတ်အောင် သင်ကြားပေးသည့် Course ဖြစ်သည်။ PHP နှင့် တွဲဖက်အသုံးပြုရန် MySQL Database ကို သင်ကြားပေးမည်။ သင်တန်းပြီးဆုံးလျှင် PHP ဖြင့် Web Application များတည်ဆောက်တတ်သွားမည်။ သင်တန်းတက်ရန် Web Technologies, HTML, CSS နှင့် Programming အခြေခံရှိထားဖို့ လိုပါသည်။
                    </p>

                    <ul className="mm"> 
                        <li>Web Application Project တစ်ခုရေးသားရမည်။</li>
                        <li>သင်တန်းကြေး ကျပ် ၂၀၀,၀၀၀ ။</li>
                        <li>သင်တန်းကြာချိန် ၂ လ - ၃ လ ၊ တပတ်လျှင် ၄ ရက် စုစုပေါင်း  ၄၈ နာရီ+ သင်ကြားမည်။</li>
                        <li>တန်းခွဲ တစ်ခုလျှင် သင်တန်းသား စုစုပေါင်း ၁၅ ယောက် လက်ခံပါမည်။</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="schedule">
            <h1>Class Schedule</h1>
        </div>

        <div className="course">
            <div className="container mx-auto">
                <div className="card">
                    
                    <ul className="mm">
                        <li>စနေ - တနင်္ဂနွေ ( နေ့လည် ၁၂ နာရီမှ ၂ နာရီ )</li>

                        <li>စနေ - တနင်္ဂနွေ ( နေ့လည် ၂ နာရီမှ ၄ နာရီ )</li>

                        <li>စနေ - တနင်္ဂနွေ ( နေ့လည် ၄ နာရီခွဲမှ ၆ နာရီခွဲ )</li>

                        <li>အင်္ဂါ - ဗုဒ္ဓဟူး (နေ့လည် ၄ နာရီမှ ၆ နာရီ )</li>

                        <li>အင်္ဂါ - ဗုဒ္ဓဟူး ( ညနေ ၆ နာရီခွဲ မှ ၈ နာရီခွဲ  )</li>

                        <li>ကြာသပတေး - သောကြာ (နေ့လည် ၁ နာရီမှ ၃ နာရီ )</li>

                        <li>ကြာသပတေး - သောကြာ (နေ့လည် ၄ နာရီမှ ၆ နာရီ )</li>
                        
                    </ul>

                    <br />

                    <p className="mm text-justify"> 
                        သင်တန်းကိစ္စ စုံစမ်းလိုလျှင် ရုံးချိန်အတွင်း ဖုန်းနဲ့ ဖြစ်စေ၊ Email နဲ့ ဖြစ်စေ ဆက်သွယ်နိုင်ပါတယ်။ မိမိ Company ၏ဝန်ထမ်းများ Skill ပိုမြှင့်တင်လိုလျှင် Professional Web Development Course ကို Company များတွင် Short Term အနေဖြင့် ပြောင်းလဲ သင်ကြားပေးနေပါသည်။ သင်တန်းများကို Google Form မှတဆင့်လည်း ကြိုတင်စာရင်းပေးသွင်းနိုင်ပါသည်။ စာရင်းပေးသွင်းထားသော ဖုန်းနံပတ်အတိုင်း ပြန်လည်ဆက်သွယ်ပါမည်။
                    </p>

                    <a href="http://goo.gl/forms/lYHyAGWxw4L0oJ3s2" className="btn btn-raised btn-info">Online Register Here</a>
                    
                </div>
            </div>
        </div>

        <div className="map">
            <div className="contact">
                    <h1>Classroom Location and Contact Information</h1>
            </div>

            <div className="flex container mx-auto card my-10">      
                <div className="w-1/2">
                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=16.809160,96.128031&zoom=17&scale=2&size=500x350&maptype=roadmap&key=AIzaSyDaQmJLbIE26jNA6OmP78BXCTYNLypmldA&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:C%7C16.809160,96.128031" className="img-responsive" />
                </div>

                <div className="w-1/2 ml-10">
                    <p>+959 794303891</p>
                    <p>johnthelinux@gmail.com</p>
                    <hr />
                    <p>Building 33, Third Floor,</p>
                    <p>San Chaung Township, Yangon,</p>
                    <p>Republic of the Union of Myanmar</p>
                    <hr />
                    <p className="mm">တိုက် ၃၃၊ ၃ လွှာ၊ ဂွစျေးအနီး</p>
                    <p className="mm">စမ်းချောင်းမြို့နယ်၊ ရန်ကုန်မြို့။</p>
                </div>
            </div>	
        </div>

        <div className="footer">
            <p>&copy; Copyright <a href="http://johnthelinux.com" target="_blank">Htet Wai Yan Soe</a> 2018 - 2020</p>
        </div>
      </Layout>
    )
  }
}

export default CoursesPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
            title
            }
        }
        avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
            childImageSharp {
            fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
            }
            }
        }
    }
`