import React from 'react';
import { CAMBER } from '../../constants/enums';

const AddSkisForm = () => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-black text-sm mb-2" htmlFor="name">
                                Pavadinimas
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" type="text" placeholder="Pavadinimas" required />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm mb-2" htmlFor="size">
                                Ilgis (cm)
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="size" type="number" placeholder="Ilgis" required />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm mb-2" htmlFor="profile">
                                Profilis
        </label>
        <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="profile" required>
          <option value="" selected disabled>Pasirinkite</option>
          <option value={CAMBER.CAMBER}>Camber</option>
          <option value={CAMBER.REVERSE_CAMBER}>Reverse camber</option>
          <option value={CAMBER.ROCKER}>Rocker</option>
          <option value={CAMBER.FLAT}>Flat</option>
          <option value={CAMBER.HYBRID}>Hybrid</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm mb-2" htmlFor="image">
                                Nuotrauka
        </label>
        <input
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 file:border-0
            file:text-sm file:font-semibold"
          name="image"
          type="file"
          accept="image/*"
          required
        />
      </div>
    </>
  );
};

export default AddSkisForm;
