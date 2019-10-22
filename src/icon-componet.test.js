
import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

import IconComponent from './icon-component'

describe('<IconComponent/>', () => {
    const defaultProps = {
        icon:'fa-google',
        customizePrefixCls:'oauth-login'
    }

    describe('exist:', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<IconComponent {...defaultProps}/>);
        });
        test('renders <MyComponent /> component', () => {

            expect(wrapper).toHaveLength(1);
        });
        test('type is span', () => {
            expect(wrapper.type()).toEqual('span')
        })
        test('type has children', () => {
            expect(wrapper.prop('children')).toMatchSnapshot()
        })
    });

    describe('classname', () => {


        test('should have proper classname with default props', () => {
            const props = Object.assign({},defaultProps)
            const icon = mount(<IconComponent {...props}/>);
            expect(icon.find('i').length).toEqual(1);
            expect(icon.find('i').prop('className')).toEqual("oauth-login-icon fa fa fa-google")
        });
        test('should show loading', () => {
            const props = Object.assign({},defaultProps,{isLoading:true})
            const icon = mount(<IconComponent {...props}/>);
            expect(icon.find('i').length).toEqual(1);
            expect(icon.find('i').prop('className')).toEqual(expect.stringContaining('fa  fa-circle-o-notch fa-spin'))
        });
        test('should show special span', () => {
            const props = Object.assign({},defaultProps,{isLoading:true,spinner:'spinner'})
            const icon = mount(<IconComponent {...props}/>);
            expect(icon.find('i').length).toEqual(1);
            expect(icon.find('i').prop('className')).toEqual(expect.stringContaining('fa-spin'))
            expect(icon.find('i').prop('className')).toEqual(expect.stringContaining(' fa  spinner'))
        });
        test('should not show special span if isLoading is false', () => {
            const props = Object.assign({},defaultProps,{isLoading:false,spinner:'spinner'})
            const icon = mount(<IconComponent {...props}/>);
            expect(icon.find('i').length).toEqual(1);
            expect(icon.find('i').prop('className')).toEqual(expect.not.stringContaining('fa-spin'))
            expect(icon.find('i').prop('className')).toEqual(expect.not.stringContaining(' fa  spinner'))
        });
        test('should show prop size', () => {
            const props = Object.assign({},defaultProps,{size:'sm'})
            const icon = mount(<IconComponent {...props}/>);
            expect(icon.find('i').length).toEqual(1);
            expect(icon.find('i').prop('className')).toEqual(expect.stringContaining('oauth-login-icon-sm'))
        });
        test('should show icon-only', () => {
            const props = Object.assign({},defaultProps,{iconOnly:true})
            const icon = mount(<IconComponent {...props}/>);
            expect(icon.find('i').length).toEqual(1);
            expect(icon.find('i').prop('className')).toEqual(expect.stringContaining('icon-only'))
        });

    });







});
