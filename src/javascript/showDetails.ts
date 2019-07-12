interface Details{
  name: string;
  health: string;
  attack: string;
  defense: string;
  source: string;
}

function showDetails(details:Details, callback: (updatedDetails: Details) => void) {

    function showCover() {
      const coverDiv:HTMLDivElement = document.createElement('div');
      coverDiv.id = 'cover-div';
      document.body.appendChild(coverDiv);
    }
  
    function hideCover() {
      document.body.removeChild(document.getElementById('cover-div'));
    }
  
    function complete(details: Details) {
      hideCover();
      container.style.display = 'none';
      callback(details);
    }
  
    const inputs:HTMLInputElement[] = [];
    const form:HTMLElement = document.getElementById('details-form');
    const container:HTMLElement = document.getElementById('details-form-container');
    showCover();
  
    for (const key in details) {
      const element = document.getElementById(key) as HTMLInputElement;
      if (element) {
        element.value = details[key];
        inputs.push(element);
      }
    }
  
    form.onsubmit = function() {
      inputs.forEach((input) => details[input.id] = input.value);
      complete(details);
      return false;
    };
    container.style.display = 'block';
  }
  
  export default showDetails;
  