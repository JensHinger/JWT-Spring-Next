'use client'

import { useState } from "react";

export default function PasswordInput() {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    return(
        <div>
            <label>
                Password: <input 
                name="password"
                type={visiblePassword? "text": "password"} 
                placeholder="Enter password"
                required/>
            </label>
            <button 
            type="button"
            className=""
            onMouseDown={() => setVisiblePassword(true)}
            onMouseUp={() => setVisiblePassword(false)}
            onMouseLeave={() => setVisiblePassword(false)}>
                O
            </button>
        </div>
    )
}