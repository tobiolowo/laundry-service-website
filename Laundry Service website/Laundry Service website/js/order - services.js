document.addEventListener('DOMContentLoaded', () => {
    const servicePrices = {
        'Washing and Folding': 3500,
        'Self Service': 2500,
        'Dry Cleaning': 3000,
        'Pickup': 4000,
        'Delivery': 4000
    };

    const form = document.getElementById('service-form');
    const receiptSection = document.getElementById('receipt');
    const receiptList = document.getElementById('receipt-list');
    const totalCostElement = document.getElementById('total-cost');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const pickup = document.getElementById('pickup').value;
        const delivery = document.getElementById('delivery').value;

        if (!name || !service || !pickup || !delivery) {
            alert("Please fill in all fields.");
            return;
        }

        const serviceCost = servicePrices[service] || 0;

        let pickupCost = 0;
        let deliveryCost = 0;

        if (pickup === 'Pickup') pickupCost = 4000;
        if (delivery === 'Deliver') deliveryCost = 4000;

        const total = serviceCost + pickupCost + deliveryCost;

        receiptList.innerHTML = `
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Pickup:</strong> ${pickup} - ₦${pickupCost}</li>
            <li><strong>Delivery:</strong> ${delivery} - ₦${deliveryCost}</li>
            <li><strong>Service Price:</strong> ₦${serviceCost}</li>
        `;
        totalCostElement.textContent = `Total Cost: ₦${total}`;

        receiptSection.style.display = 'block';
    });
});
