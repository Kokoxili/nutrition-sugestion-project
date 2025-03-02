import React, { useState } from 'react';

function SettingImage(props) {
    const [imageSrc, setImageSrc] = useState(props.defaultImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLklEQVR4nO2a328VRRSAv6KlEGoM6h+AgFRiCwQCRYKJUQsiBB4kwfjgE1rf1AfE+geoKIRKtD74pNYIVt8UNEhMCsRQlQeDUYo/qsQXbQlSqlSa1kxybnJzcvbemd3ZvSXZL5lkc++cc3Znds85c2agpKSkpKQkb9qAbuAt4ATwE3AJ+E/aJfnN/dcnfZdxg7MCOABcBGZStt+B/aLrhqAJ2AqczvDQSe0U8IjYmJWsAc7k8OC6fQWsZhYxD+gFpmrc9BXgU2AvsE18wkKgWdpC+W2b9DkKjNfQ52wdBFoa/fBLgbMJNzkNfAI8mvJG3cDulIGbTrDxLbCEBnEvMJbw4IeB9oi2OoAPEwZhFOikYDYBV42b+RG4P0e7DwDnDbvuXrooiHUJD/8u0FqA/fnA24b9CWBDEd/8mPHK76F4XjB8w1/A4rwMzjMcnruB3QE6msWx9QM/yJs0Ltf98p/r48uTxiB8nVd06DVeu5CZ3wEMe8T5Yenry15Dh8seoyc5U8rIO56yc4CXA5MdN6sviawP7yn568AqItFkZHjO2y/wlA99+OrmBsGHVuPtcqlzFLYas+Mb6nYY3+i/ksWtk0FcINe98p+2td3T1oPGAG4mAqeVUpfk+NBszMpvdRKkDlkBap/g6xgHlOwgGVlpzMg9nrI7jZn3yQ7dIFxTsk6XDyuMNy5TRnpAKXO5vS/9Sta99r68rmSdk/PlqJJ9lQxcTDkTiKOsll0bINtpOF1fdinZEVLSZixpQxKMK0o+JE2+xbAdkirrVN1lsME8rZS4ZWkIf0ccgMuBtj9T8k+Rgj6lxGVcIZxT8i7U+bJeyX4XaLtHyb9BCk4oJa5aE4LOzlyc9+VQyqyzwnYlf5wU/KqUhJaptxhh0IU4n9Crw+DDgbbvVvI/k4JRpeT2QPmbge+NRKijThzXidA50RXCHcYyOZhJpWRuCh33GYnJNYnz68Uxtsr1IWPmnezGFHZbDJsNGQDHM0pPSHuedEQZgNGMn0CFOYZD9WlfBCyHc/kEfsnoBCvOKMtmyRnRkcZutR6371h4GNxiJENp2uUUUSBKGOzLkAhtMhxa5Vv8AHhMUu1KPaBNfjts+J6KXFfRiVC3UuJWWT7clbCtdQRY5CF/Z8ImyLjo9uFzJeuKp8EsM27AVYZrcRMwpOSmJBKE8qxRhxwSG/UWQxMxFkMYSUm95fATxsylefgKzxn6nI1ClsNIedm3IOKKpxeM1z4rA0aJrNYZgWOq/74sxtuNzCwpld2o+k5G2qVZZDjUDTXWETrz9Fl/1OSUUugclMU+1c95+1gcUbpfSej3ceyiKHIsRX+HbpdWM6j6uG8xFo8r3V8afR4y7tOF48w0ybGUasXnjQrPH6pPzFNeujznapW6gqT9z8mI9llthCS9P6A3NWJulbcq3f/UKb5Mxdwaq3DQeMXcFnWjedG4r9fyMNQCfGNEhVQFx0h0G15/KMPSvS5LjGXydIqCaayZ1w//p6TSubI2Idf/CLg1b+Pi8N437E/Iwa1C6Eo4JzQsu7R52tXefkYmxIXBQumUSsuM0QYin+9daSQ51a99yJ5DVBbLmRzrxqZlCb1LVmihzJcawbEaByWHivjmfaLDfjmWMpPQrsp2VY9Ua5YDt4m3nivXy+VARY+s5/WStrpdl1CXm7dPwypj3ZBHOymfxKxls7EuiNEGY+X2RdEuhxNGMjz0iKwyY547bghLpS73plRoL8iJ00lpYxJCj0uf3VnKWCUlJSUlJXjxP1+hj/GGg7fcAAAAAElFTkSuQmCC");

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                setImageSrc(e.target.result);
                console.log(e.target.result);
                localStorage.setItem("image",e.target.result);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <div className="image-container">
            <img 
                src={imageSrc} 
                alt="Upload Preview" 
                onClick={() => document.getElementById("hiddenFileInput").click()} 
                style={{ 
                    cursor: "pointer",
                    width: "150px",
                    height: "150px",
                }}
            />
            <input 
                type="file" 
                id="hiddenFileInput" 
                onChange={handleImageChange} 
                style={{ display: "none" }} 
                accept="image/*"
            />
        </div>
    );
}

export default SettingImage;
