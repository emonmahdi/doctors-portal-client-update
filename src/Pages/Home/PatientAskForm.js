import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Navbar from '../Shared/Navbar/Navbar';

const PatientAskForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    fetch('http://localhost:5000/question', {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Question added successfully')
                e.target.reset();
                window.location.reload()
            }
        }).catch((error) => {
            console.log(error.message)
        })
    console.log(formData)
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Ask a Question</h2>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required 
                className="px-3 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-300 text-slate-600 outline-none focus:outline-none focus:ring"
                value={user?.displayName}
                onChange={handleInputChange}
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-3 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-300 text-slate-600 outline-none focus:outline-none focus:ring"
                value={user?.email}
                onChange={handleInputChange}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="question" className="block text-sm font-medium text-gray-700">
              Question
            </label>
            <div className="mt-1">
              <textarea
                id="question"
                name="question"
                rows="4"
                required
                className="px-3 py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-300 text-slate-600 outline-none focus:outline-none focus:ring"
                value={formData.question}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default PatientAskForm;
