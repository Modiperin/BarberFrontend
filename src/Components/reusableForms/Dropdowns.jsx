import React from 'react'
import { useForm } from 'react-hook-form';

export const Dropdowns = ({ fieldName, validations, firstFieldName, data ,register,onChange }) => {
    console.log(data)
    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        if (onChange) {
            onChange(selectedValue);
        }
    };
    return (
        <div>
            <form>
                <select
                    // name={fieldName}
                    {...register(fieldName,validations)}
                    onChange={handleDropdownChange}
                >
                    <option >{firstFieldName}</option>
                    {data?.value?.map((cities) => {
                        return (
                            <option value={cities._id}>{cities.cityName}</option>
                        );
                    })}
                </select>
            </form>
        </div>
    )
}
