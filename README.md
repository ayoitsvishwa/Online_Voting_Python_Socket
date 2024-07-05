**Description:**

The "Online Voting System between Two Different Systems" is a secure and efficient solution that allows users on separate systems to participate in an online voting process. The system involves a client-server architecture where one system acts as the server and the other as the client. The server listens for incoming connections, receives and processes votes from clients, and sends acknowledgments back. The clients connect to the server, submit their votes, declares the winners, receive acknowledgment, and close the connection. This system facilitates real-time voting with minimal latency, ensuring accurate and reliable results. 

**Features:**

1. Multiple clients can connect to the server and vote simultaneously
2. The Server contains the candidate
3. The Client (Voter) can choose the candidate and vote.
4. The Vote cast is sent to the Server.
5. The Server sends an acknowledgment “Vote received! Thank you!” to the client.
6. The age limit functionality is present (people less than 18 cannot vote)
7. Once the voting is ended the client cannot vote again (it shows the voting process ended)
8. The winner is declared at the server side after the ‘end voting’ is intiated by the client.



**Here's an expanded description of how the code is built and how it runs:**

*1. Server-side (“server.py”):*
a. Importing Required Modules:
   - The code starts by importing the necessary modules, “socket” and “threading”, which are used for creating socket connections and handling multiple client connections concurrently, respectively.

b. Global Variables:
   - The code declares several global variables:
     - “votes”: A dictionary that stores the votes for different candidates.
     - “total_votes”: A variable to keep track of the total number of votes received.
     - “voting_ended”: A flag to indicate whether the voting process has ended.

c. “handle_client” Function:
   - This function is responsible for handling communication with a single client.
   - It takes the “client_socket” object as an argument, which represents the socket connection with the client.
   - The function first receives the details of the voter (name, age, and address) from the client.
   - If the “voting_ended” flag is “True”, it sends a response to the client indicating that voting has ended and their vote will not be counted.
   - If the voting is still ongoing, it receives the voter's choice of candidate.
   - If the received choice is "end vote", it sets the “voting_ended” flag to “True”, sends a response indicating the end of voting, and calls the “determine_winner” function to calculate and print the winner immediately.
   - Otherwise, if the received choice is a valid candidate, it increments the vote count for that candidate in the “votes” dictionary, updates the “total_votes” count, sends a response acknowledging the vote, and prints the current vote tally.
   - If the received choice is not a valid candidate, it sends a response indicating an invalid choice.
   - Finally, it closes the client socket.

d. “start_server” Function:
   - This function is responsible for starting the server and listening for incoming client connections.
   - It creates a server socket object using “socket.socket()” with the address family as IPv4 (“socket.AF_INET”) and the socket type as TCP (“socket.SOCK_STREAM”).
   - It binds the server socket to all available network interfaces on port 6666 using “server_socket.bind(('0.0.0.0', 6666))”.
   - The “server_socket” then listens for incoming connections with a maximum queue size of 5 using “server_socket.listen(5)”.
   - It enters an infinite loop to accept incoming client connections.
   - When a client connection is accepted, a new thread is created using “threading.Thread()” with the “handle_client” function as the target and the “client_socket” as the argument.
   - The new thread is started using “client_handler.start()” to handle the client connection concurrently.
   - The loop continues to accept new connections as long as the server is running.

e. “determine_winner” Function:
   - This function calculates and prints the winner based on the votes received.
   - It determines the candidate(s) with the maximum number of votes by finding the maximum vote count from the “votes” dictionary and filtering the candidates with that count.
   - It then prints the total votes received, individual vote counts for each candidate, and the winner(s).

f. Starting the Server:
   - The code concludes by calling the “start_server” function to start the server and listen for incoming client connections.

In summary, this server code sets up a socket connection, receives votes from clients, stores the votes in a dictionary, and determines the winner(s) when the voting process ends. It uses threads to handle multiple client connections concurrently.

*2. Client-side (“client.py”):*
a. Importing necessary modules:
   - “tkinter”: A module for creating GUI applications.
   - “socket”: A module for creating socket connections for communication.
   - “threading”: A module for handling multiple threads to perform concurrent tasks.
   - “PIL.Image”, “PIL.ImageTk”: Modules from the Python Imaging Library (PIL) used for image manipulation and display.

b. Setting up global variables:
   - “SERVER_IP”: The IP address of the server the client will connect to.
   - “port”: The port number on which the server is listening.
   - “total_votes”: A variable to track the total number of votes.
   - “voting_ended”: A flag to track if voting has ended.

c. Defining the “vote” function:
   - This function is called when a voter casts their vote.
   - It establishes a connection with the server using a socket.
   - It sends the voter's details (name, age, address) and their choice to the server.
   - It receives a response from the server and prints it.
   - It increments the “total_votes” counter.
   - If the total number of votes reaches 10, it calls the “end_voting” function.
   - It clears the input fields for the next voter.
   - It handles potential exceptions related to the socket connection.

d. Defining the “cast_vote” function:
   - This function is called when a candidate button is clicked.
   - It creates a new thread using the “vote” function to handle the voting process concurrently.
   - It updates the “result_label” to display the selected candidate.

e. Defining the “validate_and_start_gui” function:
   - This function is called when the "Start Voting" button is clicked.
   - It validates the voter's details (age) and starts the GUI for casting votes.
   - If the age is less than 18, it displays a message indicating that the voter is not eligible.
   - Otherwise, it sets the “voting_ended” flag to False, disables the "Start Voting" button, and shows the candidate selection buttons.

f. Defining the “end_voting” function:
   - This function is called when the "End Voting" button is clicked.
   - It casts a vote with the choice "end vote" to inform the server that voting has ended.
   - It sets the “voting_ended” flag to True, enables the "Start Voting" button, and hides the candidate selection buttons.

g. Creating the main window:
   - It creates a Tkinter window and configures it.
   - Sets a background image for the window.

h. Creating GUI elements:
   - Creates labels, entry fields, and buttons using Tkinter widgets to display voter details, candidate selection, and voting results.
   - Uses the “grid” method to position the elements in a grid layout.
   - Loads and displays candidate images using the “PIL.Image” and “PIL.ImageTk” modules.

i. Setting up event handlers:
   - Binds the “cast_vote” function to the candidate selection buttons.
   - Binds the “validate_and_start_gui” function to the "Start Voting" button.
   - Binds the “end_voting” function to the "End Voting" button.

j. Starting the GUI event loop:
   - Calls the “mainloop” method to start the Tkinter event loop, which listens for user interactions and updates the GUI accordingly.

Overall, the client code creates a user-friendly GUI for voters to enter their details, cast votes for candidates, and view voting results in real time.




**HOW TO RUN?**
1. Start the server-side script (“server.py”) on the server machine.
2. Establish “192.168.20.34” in the client-side script (“client.py”) with the server's IP address.
3. Run the client-side script (“client.py”) on the client machine.
4. The GUI window will appear, allowing the user to select a candidate and cast their vote.
5. The server will receive the vote, update the vote count, and send an acknowledgment back to the client.
6. The client-side GUI will display the acknowledgment or result on the result label.
7. After the client is done with voting, the winner is declared at the server side with the total number of votes each party secured.

The online voting system is built using socket programming for client-server communication and tkinter for GUI development. The server receives and stores the votes, while the client provides an interactive interface for voters to cast their votes and view the results.
