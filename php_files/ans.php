<!-- component -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Senior Software Engineer Resume</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        body {
            font-family: 'Roboto', sans-serif;
        }
    </style>
</head>
<?php
$con=mysqli_connect("localhost","root","","exam_s");

$id=1002;

   ?>
<body >
    <div class="container mx-auto py-10 px-5">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-4 sm:p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <?php
                            $q2="select paper from test_join where exam_id=$id";
                            $r1=mysqli_query($con,$q2);
                            if($res1=mysqli_fetch_assoc($r1))
                            {
                        ?>
                        <h2 class="text-2xl font-semibold"><?php  $res1['paper'].'test'?></h2>
                        <?php
                            }
                        ?>
                        <p class="text-sm text-gray-600">Approved by your Teacher</p>
                    </div>
                    <div>
                    <a href="https://www.google.co.in/"><img src="http://localhost/pg/project/image.png" width="69px" height="69px" ></a>
                    </div>
                </div>
                <hr class="my-4">
                <div>
                    <h3 class="text-lg font-semibold mb-2">Summary</h3>
                    <p class="text-sm leading-relaxed">Results-oriented Senior Software Engineer with 20 years of experience
                        designing, developing, and deploying complex software solutions. Proficient in a variety of
                        programming languages and technologies. Proven track record of leading teams and delivering
                        high-quality products.</p>
                </div>
                <div class="mt-4">
                    <h3 class="text-lg font-semibold mb-2">Experience</h3>
                    <div>
                        <h4 class="text-md font-semibold">ABC Corporation</h4>
                        <p class="text-sm text-gray-600">Senior Software Engineer | 2015 - Present</p>
                        <ul class="list-disc list-inside text-sm">
                            <li>Lead a team of developers in designing and implementing a scalable microservices
                                architecture.</li>
                            <li>Developed and maintained critical components of the company's flagship product, resulting
                                in increased reliability and performance.</li>
                            <li>Collaborated with product managers to define project requirements and timelines.</li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-md font-semibold">XYZ Tech</h4>
                        <p class="text-sm text-gray-600">Software Engineer | 2008 - 2015</p>
                        <ul class="list-disc list-inside text-sm">
                            <li>Contributed to the development of a cutting-edge mobile application, used by millions of
                                users worldwide.</li>
                            <li>Implemented continuous integration and deployment pipelines, improving team efficiency
                                and product quality.</li>
                            <li>Mentored junior engineers and conducted code reviews to ensure adherence to best
                                practices.</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-4">
                    <h3 class="text-lg font-semibold mb-2">Skills</h3>
                    <ul class="list-disc list-inside text-sm">
                        <li>Programming Languages: Java, Python, JavaScript</li>
                        <li>Frameworks & Libraries: Spring Boot, React, Angular</li>
                        <li>Database Systems: MySQL, PostgreSQL, MongoDB</li>
                        <li>Cloud Technologies: AWS, Azure, Google Cloud Platform</li>
                        <li>Agile Methodologies: Scrum, Kanban</li>
                        <li>DevOps Tools: Docker, Kubernetes, Jenkins</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>