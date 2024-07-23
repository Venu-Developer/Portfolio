import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLocation, IoLocationSharp } from "react-icons/io5";
import { FaMobileRetro } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
//symbols
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  //state
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMeassage] = useState("");

  ///Validation state
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  //validation fuction
  //checking proper name
  function checkName(userName) {
    console.log(userName);
    const Name = [...userName].every(
      (char) => (char >= "a" && char <= "z") || (char >= "A" && char <= "Z")
    );
    if (Name && userName != "") {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }

  // checking Email

  function checkEmail(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");
    let dotSymbol = emailAddress.lastIndexOf(".");
    let spaceSymbol = emailAddress.indexOf(" ");
    let domainNames = [".com", ".in", ".gov", ".edu", ".net", ".mil"];
    let lastDomainString = "",
      flag = 0;
    for (let i = dotSymbol; i < emailAddress.length; i++) {
      lastDomainString += emailAddress[i];
    }
    for (let i = 0; i < domainNames.length; i++) {
      if (lastDomainString === domainNames[i]) {
        flag = 1;
      }
    }
    if (flag == 0) {
      setValidEmail(false);
      return 0;
    }
    if (
      atSymbol != -1 &&
      atSymbol != 0 &&
      dotSymbol != -1 &&
      dotSymbol != 0 &&
      dotSymbol > atSymbol + 1 &&
      emailAddress.length > dotSymbol + 1 &&
      spaceSymbol == -1
    ) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    return 0;
  }

  //send email
  const sendEmail = (e) => {
    e.preventDefault();
    if (userMessage && validName && validEmail) {
      emailjs
        .sendForm("service_gm0npk6", "template_n7k3yrj", form.current, {
          publicKey: "q_LzlKzvvjpuEtG-u",
        })
        .then(
          () => {
            setValidName(false);
            setValidEmail(false);
            setValidMessage(false);
            setUserName("");
            setUserEmail("");
            setUserMeassage("");
            console.log("SUCCESS!");
            toast.success("Succefully send Message!");
          },
          (error) => {
            toast.error("Check your internet connection!");
            console.log("FAILED...", error.text);
          }
        );
    } else {
      toast.error("Fill all the details and check the internet connection!");
    }
  };

  //onchange updating value

  //Name
  function updatingNameValue(event) {
    const { value } = event.target;
    checkName(event.target.value);
    setUserName((pre) => {
      return pre, value;
    });
  }

  //Email
  function updatingEmailValue(event) {
    const { value } = event.target;
    checkEmail(event.target.value);
    setUserEmail((pre) => {
      return pre, value;
    });
  }

  //Message
  function updatingMeaasageValue(event) {
    const { value } = event.target;
    setUserMeassage((pre) => {
      return pre, value;
    });
    value.length > 10 ? setValidMessage(true) : setValidMessage(false);
  }
  console.log(validMessage);
  return (
    <div id="contact" className="z-10 pb-4">
      <h6 className="my-20 text-center text-4xl font-medium font-serif text-[#002A5B] animate-bounce">
        Contact Us
      </h6>
      <div className="w-full flex flex-wrap bg-[#11998E] p-5 ">
        <div className="w-full lg:w-1/2 pb-10  p-5 bg-[#1EAE98] border-[#1EAE98] rounded-lg text-gray-300  font-serif">
          <div>
            <div className="flex ">
              <IoLocationSharp className="text-[70px] sm:text-4xl mb-3 text-[#002A5B]" />
              <div className="mx-3 mt-5 sm:mt-1">
                <p>Address</p>
                <p className="flex flex-row">
                  {" "}
                  <span className="font-sans text-wrap">58</span>,Mettu
                  Street,Keemallore Village,Thanipoondi Post,Gummidipoondi
                  Taluk,Thiruvallur District,Pin Code -601202{" "}
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <FaMobileRetro className=" text-2xl my-2 text-[#002A5B]" />
              <div className="mx-3">
                <span>Mobile Number</span>
                <p className="font-sans"> 6383178328 </p>
              </div>
            </div>
            <div className="flex mt-3">
              <MdEmail className="text-3xl text-[#002A5B]" />
              <div className="mx-3">
                <span>Email</span>
                <p>
                  <a
                    href="mailto:venu191202@gmailcom"
                    target="_blank"
                    className="underlin"
                  >
                    venu191202@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex text-center mt-3 justify-center">
              <a href="https://github.com/Venu-Developer" target="_blank">
                <FaGithub className="text-3xl text-[#002A5B]  mr-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/venu-d-622892232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-[#002A5B] mr-3" />
              </a>
              <a href="https://www.instagram.com/venu12_/" target="_blank">
                <FaInstagramSquare className="text-3xl text-[#002A5B]  " />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center max-lg:mt-10">
          <div className="border border-[#1EAE98] shadow-md  p-2 bg-[#1EAE98]  rounded-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="m-2 text-[#002A5B] font-serif py-2 ">
                {/* <label className="mr-8">Name</label> */}
                <input
                  className="text-black rounded-md p-1 pr-4"
                  type="text"
                  name="from_name"
                  onChange={updatingNameValue}
                  value={userName}
                  placeholder="Name"
                />
                <p className=" text-sm mr-[-5px] mt-1 text-[#002A5B]">
                  {validName ? "" : "Enter the name"}
                </p>
              </div>
              <div className="m-2 text-[#002A5B] font-serif py-0">
                {/* <label className="mr-9">Email</label> */}
                <input
                  className="text-black rounded-md p-1 pr-4"
                  type="email"
                  name="from_name"
                  onChange={updatingEmailValue}
                  value={userEmail}
                  placeholder="Email"
                />
                <p className=" text-sm mr-[-37px] mt-1 text-[#002A5B] ">
                  {validEmail ? "" : "Enter the valid email"}
                </p>
              </div>
              <div className="m-2 text-[#002A5B] font-serif py-2">
                {/* <label className="mr-3">Message</label> */}
                <textarea
                  onChange={updatingMeaasageValue}
                  value={userMessage}
                  className="text-black rounded-md pr-4 p-2"
                  name="message"
                  placeholder="Message"
                />
                <p className="text-sm mr-[-60px]  text-[#002A5B]">
                  {!validMessage && "Type more than 10 letter"}
                </p>
              </div>
              <div className="m-2 text-center ">
                <button
                  className="border-[#c3e9c8] bg-[#c3e9c8]  text-[#002A5B] px-3 rounded-lg font-serif  transform hover:bg-[#bbe2be]"
                  type="submit"
                >
                  Send Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
