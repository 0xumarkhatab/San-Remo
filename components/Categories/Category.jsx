import React from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

function Category({theOrder}) {

  return (
    <tr>
      <td>
        <div className="avatar-group">
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip742438047"
            onClick={(e) => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src="https://images.immediate.co.uk/production/volatile/sites/2/2016/03/22329.jpg?quality=90&resize=568,574"
            />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip742438047">
            
            Calzone

          </UncontrolledTooltip>
          
        </div>
      </td>
      <td>Pick Up</td>
      <td>$230</td>
      <Badge color="" className="text-center mt-5 badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
      </Badge>
                      
      <td>Cash On Delivery</td>

      {/* <td>
                <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                       
              </td>
               */}
    
      <td className="text">
        <td>
          <div className="avatar-group">
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip706438047"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src="https://icon-library.com/images/receipt-icon/receipt-icon-24.jpg"
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip706438047">
              Receipt
            </UncontrolledTooltip>
            
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip706438048"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src="https://www.kindpng.com/picc/m/145-1452108_transparent-scooter-clipart-motorcycle-delivery-icon-png-png.png"
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip706438048">
              Proceed
            </UncontrolledTooltip>
            
          
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip706438049"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src="https://previews.123rf.com/images/arhimicrostok/arhimicrostok1708/arhimicrostok170802891/84747832-red-trash-can-icon-.jpg"
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip706438049">
              Delete
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip706438050"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
              src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1710/faysalfarhan171018091/89010189-info-icon-isolated-on-orange-round-button-abstract-illustration.jpg"
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip706438050">
              View 
            </UncontrolledTooltip>
          
          </div>

        </td>
      </td>
    </tr>
  );
}

export default Category;
