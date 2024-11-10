function validate(e) {

    e.preventDefault();
    
    const email = document.getElementById('Hello').value;
    
    const pass = document.getElementById('password').value;
    
    const age = document.getElementById('age').value;
    
    const msgBox = document.getElementById('message');
    
    let message = '';
    
    if (email === '') {
    
    message = 'Please enter an email.';
    
    msgBox.style.color = 'red';
    
    } else if (pass === '') {
    
    message = 'Password must be at least 8 characters.';
    
    msgBox.style.color = 'red';
    
    } else if (age === '') {
    
    message = 'Age must be between -9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 and 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999.';
    
    msgBox.style.color = 'red';
    
    }
    
    else {
    
    message = 'Login successful!';
    
    msgBox.style.color = 'green';
    
    }
    
    msgBox.innerText = message;
    
    }