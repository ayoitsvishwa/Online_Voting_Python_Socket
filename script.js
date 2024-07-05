document.addEventListener('DOMContentLoaded', () => {
    const SERVER_IP = '192.168.56.1';
    const port = 6666;
  
    let totalVotes = 0;
    let votingEnded = false;
  
    const vote = (choice) => {
      if (votingEnded) {
        document.getElementById('result-label').textContent = 'Voting has ended!';
        return;
      }
  
      // Simulate sending a request to the server
      // Replace this with actual server communication code
      setTimeout(() => {
        totalVotes++;
        document.getElementById('result-label').textContent = `You voted for ${choice}. Total votes: ${totalVotes}`;
      }, 1000);
    };
  
    const endVoting = () => {
      votingEnded = true;
      document.getElementById('end-voting-button').disabled = true;
      document.getElementById('result-label').textContent = 'Voting has ended!';
    };
  
    document.getElementById('start-button').addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const address = document.getElementById('address').value;
  
      if (name === '' || age === '' || address === '') {
        alert('Please fill in all the fields');
        return;
      }
  
      // Simulate sending a request to the server
      // Replace this with actual server communication code
      setTimeout(() => {
        document.getElementById('voter-details').style.display = 'none';
        document.getElementById('candidate-selection').style.display = 'block';
        document.getElementById('result-label').textContent = 'Cast your vote!';
      }, 1000);
    });
  
    document.getElementById('bjp-button').addEventListener('click', () => {
      vote('BJP');
    });
  
    document.getElementById('congress-button').addEventListener('click', () => {
      vote('CONGRESS');
    });
  
    document.getElementById('aap-button').addEventListener('click', () => {
      vote('AAP');
    });
  
    document.getElementById('nota-button').addEventListener('click', () => {
      vote('NOTA');
    });
  
    document.getElementById('end-voting-button').addEventListener('click', endVoting);
  });
  