/* ****How Web Works Exercise****

## **Part One: Solidify Terminology**

In your own terms, define the following terms:

1. What is HTTP?
HTTP stands for Hypertext Transfer Protocol. It is a client-server protocol that handles how clients retrieve content
from a server, such as webpages.

2. What is a URL?
URL stands for Uniform Resource Locator. It is an address used to locate content on the web, such as webpages, images, etc.
The URL address is user-friendly and easy to read. There is a corresponding IP address made of numbers (i.e., 92.158.1.38).

3. What is DNS?
DNS stands for Domain Name System. It is considered "the phonebook of the Internet". In other words, it's the system that
maps URLs to the corresponding IP addresses for various servers, routers, computers and other devices. 

4. What is a query string?
A query string is the part of a URL that enables the user to query or search for information on a website. For example, ?x=1
tells the server to retrieve information where x = 1. 

5. What are two HTTP verbs and how are they different?
The two HTTP verbs are GET and POST. "GET" is used to retrieve data from a server. "POST" is used to change data on a server. 

6. What is an HTTP request?
An HTTP request happens when a client (i.e. recipient) makes a request to a server for information at a URL, such as a 
webpage or search results.

7. What is an HTTP response?
An HTTP response happens when the server responds to an HTTP request by providing the requested content if available.

8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
HTTP headers provide additional details about an HTTP request or response. Examples include Last-Modified, Cookie, 
Content-Language, Host, and Content-Security-Policy.

9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
When you type the referenced URL, first the browser checks the cache to see if there is an existing IP address recorded 
from previously visiting the site. If it cannot find one, it continues to look for one in the operating system cache, 
router cache, and Domain Name System. Then the browser makes an HTTP request to the corresponding IP address found. The 
server then sends a response with the data, headers, status code, etc. to the browser. The browser creates a Document Object
Model (DOM) with the HTML received and makes additional HTTP requests for other resources referenced in the HTML, such as 
CSS, JavaScript, image and music files. Finally the server responds to the remaining requests and all content is rendered
in the client's browser based on how it was coded. 
*/