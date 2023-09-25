import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // for expect(...).toBeInTheDocument()
import Footer from './footer'

describe('Footer Component', () => {
    it('renders without crashing', () => {
        render(<Footer />)
    })

    it('renders Quick Link section', () => {
        const { getByText } = render(<Footer />)
        const quickLinkTitle = getByText('Quick link')
        expect(quickLinkTitle).toBeInTheDocument()
    })

    it('renders Company section', () => {
        const { getByText } = render(<Footer />)
        const companyTitle = getByText('Company')
        expect(companyTitle).toBeInTheDocument()
    })

    it('renders Customer Service section', () => {
        const { getByText } = render(<Footer />)
        const customerServiceTitle = getByText('Customer Service')
        expect(customerServiceTitle).toBeInTheDocument()
    })

    it('renders Shop section', () => {
        const { getByText } = render(<Footer />)
        const shopTitle = getByText('Shop')
        expect(shopTitle).toBeInTheDocument()
    })

    it('renders Social Media Icons', () => {
        const { getByTestId } = render(<Footer />)
        const socialMediaIcons = getByTestId('social-media-icons')
        expect(socialMediaIcons).toBeInTheDocument()
    })
})
