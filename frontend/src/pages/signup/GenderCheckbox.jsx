function GenderCheckbox({onCheckboxChange, selectGender}) {
  return (
  <div>
    <div>
      <label htmlFor="">
        <span>Male</span>
        <input type="checkbox" name="" id="" 
        checked={selectGender === 'male'}
        onChange={() => onCheckboxChange('male')} />
      </label>
    </div>
    <div>
      <label htmlFor="">
        <span>Female</span>
        <input type="checkbox" name="" id="" 
         checked={selectGender === 'female'}
        onChange={() => onCheckboxChange('female')} />
      </label>
    </div>
  </div>
  )
}

export default GenderCheckbox