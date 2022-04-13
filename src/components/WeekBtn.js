import React from 'react';
import Button from './Button';


function WeekBtn() {
  return (
    <div className="d-flex align-items-center flex-wrap p-3 
    "><div className="m-1">
    <Button type="secondary" textbutton="شنبه">
    </Button>
    </div>
    <div className="m-1">
    <Button type="secondary" textbutton="یکشنبه">
    </Button>
    </div>
    <div className="m-1">
    <Button type="secondary" textbutton="دوشنبه">
    </Button>
    </div>
    <div className="m-1">
    <Button type="secondary" textbutton="سه شنبه">
    </Button>
    </div>
    <div className="m-1">
    <Button type="secondary" textbutton="چهارشنبه">
    </Button>
    </div>
    <div className="m-1">
    <Button type="secondary" textbutton="پنج شنبه">
    </Button>
    </div>            
    <div className="m-1">
    <Button type="secondary" textbutton="جمعه">
    </Button>
    </div>
    </div>
  )
}

export default WeekBtn