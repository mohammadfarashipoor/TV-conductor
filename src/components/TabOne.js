import SelectBox from './SelectBox';
import InputBasic from './InputBasic';
import Button from './Button';
import MyTable from './MyTable';
import {useState} from 'react'
import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';

/////popup window
const Modal = () => {
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false)
  });

  return (
    <>
      {visible && (
        <ClayModal
          observer={observer}
          size="lg"
          status="info"
        >
          <ClayModal.Header>{"Title"}</ClayModal.Header>
          <ClayModal.Body>
            <h1>{"Hello world!"}</h1>
          </ClayModal.Body>
          <ClayModal.Footer
            first={
              <ClayButton.Group spaced>
                <ClayButton displayType="secondary">{"Secondary"}</ClayButton>
                <ClayButton displayType="secondary">{"Secondary"}</ClayButton>
              </ClayButton.Group>
            }
            last={<ClayButton onClick={onClose}>{"Primary"}</ClayButton>}
          />
        </ClayModal>
      )}
      <ClayButton displayType="secondary" onClick={() => setVisible(true)}>
        {"افزودن برنامه"}
      </ClayButton>
    </>
  );
};


function TabOne(props) {
    const {data}= props;
    
    const selectBox1=[{
        label: "تمام",
        value: "1"
        },
        {
        label: "Option 2",
        value: "2"
        }];
    const selectBox2=[{
        label: "تمام",
        value: "1"
      },
      {
        label: "Option 2",
        value: "2"
      }];
  return (
    <div>            
    <div className="ml-5 mr-5 mt-2">
    <div className="bg-gray p-3 rounded">
      <div className="d-flex align-items-center flex-wrap pl-3 pr-3"><div className="m-1">انطباق با</div><div className="m-1"><SelectBox options={selectBox1}/></div><div className="m-1">فیلد های زیر</div></div>
      <div className="d-flex w-100 col-lg-12 flex-lg-nowrap flex-wrap">
        <div className="w-100 col-lg-6 col-sm-12"><InputBasic component={null} name="نام" /></div>
        <div className="w-100 col-lg-6 col-sm-12"><div className="mb-1 ">نوع برنامه</div><div><SelectBox 
        options={selectBox2}
        /></div></div> 
        </div>
        <div className="mb-2 mt-2">
        <Button type="secondary" textbutton="جست و جو"/>
        </div>
    </div>
    <div className="mb-2 mt-2">
      {Modal()}
    </div>
    <div ><MyTable data={data}/></div>
  </div></div>
  )
}

export default TabOne