import React, {useState} from 'react';
import ToursComplete from './ToursComplete';
import './index.css';
function ListTour(props) {
    const listTours = [
        {
            url: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
            title: 'Best Of Paris In 7 Days Tour',
            price: '$1,995',
            text: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'
        },
        {
            url: 'https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg',
            title: 'Best Of Ireland In 14 Days Tour',
            price: '$3,895',
            text: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'
        },
        {
            url: 'https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg',
            title: 'Best Of Ireland In 14 Days Tour',
            price: '$3,895',
            text: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'
        },
        {
            url: 'https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg',
            title: 'Best Of Ireland In 14 Days Tour',
            price: '$3,895',
            text: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'
        },
        {
            url: 'https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg',
            title: 'Best Of Ireland In 14 Days Tour',
            price: '$3,895',
            text: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You ll also enjoy guided neighborhood walks through the citys historic heart as well as quieter moments to slow down and savor the citys intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!'
        },
    ];
    const [deleteItem, setDeleteItem] = useState(listTours);

    function handleRemote(value) {
        // console.log(index);
        console.log('value', value);
        const initItem = [...deleteItem];
        initItem.splice(value, 1);
        setDeleteItem(initItem);
    }
    
    return (
        <div className="wrapper">
            <h1 style={{textAlign: 'center', marginTop: '40px', fontWeight: 'bold', fontSize: '40px'}}>Our Tours</h1>
            {listTours.map(e => <ToursComplete url={e.url} title={e.title} price={e.price} text={e.text} />)}
            <ToursComplete onSubmit={handleRemote} />
        </div>
    );
}

export default ListTour;