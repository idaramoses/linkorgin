import React, { useState } from "react";
import { Button, Text, Heading, Radio, RadioGroup, Img, SelectBox } from "../../../components";

interface TableRow {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}

const Step3 = () => {
  const [tableRows, setTableRows] = useState<TableRow[]>([
    { id: 1, title: 'Listening', option1: '', option2: '', option3: '', option4: '', option5: '' },
    { id: 2,title: 'Reading', option1: '', option2: '', option3: '', option4: '', option5: '' },
    { id: 3,title: 'Speaking', option1: '', option2: '', option3: '', option4: '', option5: '' },
    { id: 4,title: 'Writing', option1: '', option2: '', option3: '', option4: '', option5: '' },
]);

const handleOptionChange = (rowId: number, optionName: string, value: string) => {
    setTableRows(prevRows =>
        prevRows.map(row =>
            row.id === rowId ? { ...row, [optionName]: value } : row
        )
    );
};


      return (
        <div className="self-end mt-10 w-full flex items-center justify-center">
        <div className="flex flex-col w-full md:ml-0 md:w-full">
        <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                    <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                      <>
                      Language Proficiency
                      </>
                    </Text>
                   
                  </div>
      
           
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                  Native Langauge
                </label>
                <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
      <option value="">Select country</option>
      <option value="railway">English</option>
      <option value="road">Hausa</option>
      <option value="aviation">Igbo</option>
      <option value="marine">Yoruba</option>
    </select>
  </div>
              </div>
         
              <table className=" mt-2  border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
            <thead>
                <tr>
                    <th className="min-w-[20px]  px-2 py-2 font-medium border border-gray-500"></th>
                    <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">1</th>
                    <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">2</th>
                    <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">3</th>
                    <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">4</th>
                    <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">5</th>
                </tr>
            </thead>
            <tbody>
                {tableRows.map(row => (
                    <tr key={row.id}>
                        <td className="border border-gray-500 text-base" style={{ textAlign: 'center' }}>{row.title}</td>
                        <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option1" onChange={(e) => handleOptionChange(row.id, 'option1', e.target.value)} /></td>
                        <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option2" onChange={(e) => handleOptionChange(row.id, 'option2', e.target.value)} /></td>
                        <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option3" onChange={(e) => handleOptionChange(row.id, 'option3', e.target.value)} /></td>
                        <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option4" onChange={(e) => handleOptionChange(row.id, 'option4', e.target.value)} /></td>
                        <td className="border border-gray-500 px-2 py-2 " style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option5" onChange={(e) => handleOptionChange(row.id, 'option5', e.target.value)} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
              <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                      <>
                      1 - Elementary Proficiency
                      </>
                    </Text>
                    <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                      <>
                      2 - Limited Working Proficiency
                      </>
                    </Text>
                    <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                      <>
                      3 - Professional Working Proficiency
                      </>
                    </Text>
                    <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                      <>
                      4 - Full Professional Proficiency
                      </>
                    </Text>
                    <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                      <>
                      5 - Bilingual Proficiency
                      </>
                   </Text>
        </div>
    </div>
        
      );
    };
    
    export default Step3;