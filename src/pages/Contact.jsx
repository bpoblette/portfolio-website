import { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Loader from '../components/Loader'
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Dog from "../models/Dog";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  const handleFocus = () => setCurrentAnimation('Walk');
  const handleBlur = () => setCurrentAnimation('Idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Idle_2');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Brandon",
        from_email: form.email,
        to_email: 'brandonpoblette@outlook.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({
        show: true, text: 'Message sent successfully!', type: 'success'
      })
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('Idle')
        setForm({ name: '', email: '', message: '' })
      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Idle');
      console.log(error);
      showAlert({ show: true, text: 'I didnt receive your message', type: 'danger' })
    })
  };

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in touch</h1>

          <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <label className="text-black-500 font-semibold">
              name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="john"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="john@gmail.com"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="Let me know how I can help you!"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? 'Sending..' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={1} />
            <Suspense fallback={<Loader />}>
              <Dog
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[13, -0.6, 0]}
                scale={[2, 2, 2]}
              />
            </Suspense>
          </Canvas>

        </div>
      </section >
      <footer className="w-full border-t border-gray-200 mt-20 py-6 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">

          <p>
            © {new Date().getFullYear()} Brandon Poblette
          </p>

          <p className="text-center md:text-right">
            3D model{" "}
            <a
              href="https://poly.pizza/m/Hssa6NPc6W"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              "German Shepard"
            </a>{" "}
            by{" "}
            <a
              href="https://poly.pizza/u/Quaternius"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Quaternius
            </a>{" "}
            — [CC-BY] via Poly Pizza
          </p>
        </div>
      </footer>
    </>

  )
}

export default Contact