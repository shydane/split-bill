function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>patungan bareng si X</h2>

      <label htmlFor="">💵 total tagihan</label>
      <input type="text" />

      <label htmlFor="">💶 tagihan kamu</label>
      <input type="text" />

      <label htmlFor="">💷 tagihan si X</label>
      <input type="text" disabled />

      <label htmlFor="">💰 ditalangin sama</label>
      <select name="" id="">
        <option value="user">kamu</option>
        <option value="friend">teman</option>
      </select>

      <button className="button">tambah</button>
    </form>
  );
}

export default FormSplitBill;
