import React, { useState } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';


const TableBody = () => {
    return (
        <table>
            <tr>
                <td>Serving size:</td>
                <td>30g</td>
                <td>Serving Per Container:</td>
                <td>3.3</td>
            </tr>
            <tr>
                <td>Amount Per Serving</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Calories</td>
                <td>140</td>
                <td>Calories From Fat</td>
                <td>60</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>%Daily value*</td>
            </tr>
            <tr>
                <td>Total Fat</td>
                <td>6g</td>
            </tr>
            <tr>
                <td>Saturated Fat</td>
                <td>3.5g</td>
            </tr>
            <tr>
                <td>Trans Fat</td>
                <td>0g</td>
            </tr>
            <tr>
                <td>Cholesterol</td>
                <td>5mg</td>
            </tr>
            <tr>
                <td>Sodiun</td>
                <td>65mg</td>
            </tr>
            <tr>
                <td>Total Carbohydrate</td>
                <td>21mg</td>
            </tr>
            <tr>
                <td>Dietary Fiber</td>
                <td>1g</td>
            </tr>
            <tr>
                <td>Sugars</td>
                <td>14g</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td>1g</td>
            </tr>
            <tr>
                <td>Vitamin A</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>Calcium</td>
                <td>0%</td>
            </tr>
        </table>

    )
}

export default TableBody;