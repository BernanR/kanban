
export default function CardTemplate(item) {
    return `
        <div class="Mind-Card">
            <table>
                <tr>
                    <td><strong>Status:</trong></td>
                    <td>${item.status}</td>
                </tr>
                <tr>
                    <td><strong>Item:</trong></td>
                    <td>${item.item}</td>
                </tr>
                <tr>
                    <td><strong>Shipping track number:</trong></td>
                    <td>${item.track_number}</td>
                </tr>
            </table>
        </div>
    `    
}