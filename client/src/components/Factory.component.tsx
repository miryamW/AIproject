
import React from 'react';
import RMGHeader from './RMGHeader.component';
import RMGInput from './RMGInput.component';
import RMGButton from './RMGButton.component';

// Define the types for the props based on the structure of the JSON
interface ComponentProps {
  componentName: string;
  props?: any;
  children?: ComponentProps[];
}

const Factory: React.FC<{ json: ComponentProps }> = ({ json }) => {
  const renderComponent = (component: ComponentProps) => {
    const { componentName, props, children } = component;

    switch (componentName) {
      case 'RMGHeader':
        return <RMGHeader text = {props.text} level = {props.level} className={props.className}></RMGHeader>;

      case 'RMGInput':
        return (
          <RMGInput type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onKeyDown={()=>{}}/>
        );

      case 'RMGButton':
        return (
          <RMGButton title = {props.title} onClick={props.onClick} className={props.className}></RMGButton>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {renderComponent(json)}
      {json.children && json.children.map((child, index) => (
        <React.Fragment key={index}>{renderComponent(child)}</React.Fragment>
      ))}
    </>
  );
};

export default Factory;
