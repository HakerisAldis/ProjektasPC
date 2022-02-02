import React from 'react';

const AddHelmetForm = () => {
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
                                Dydis
        </label>
        <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="size" required>
          <option value="" selected disabled>Pasirinkite</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
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

export default AddHelmetForm;
