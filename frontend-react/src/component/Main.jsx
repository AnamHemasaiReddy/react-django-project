import React from 'react'
import Button from './button'
const Main = (props) => {
  return (
    <div className='container'>
        <div className='text-center p-5 bg-light-darker rounded'>
          <h1 className='text-light p-5'>portfolio</h1>
          <p className='text-light lead'>I am a passionate Data Science enthusiast with strong expertise in data analysis, machine learning, deep learning, and data-driven decision-making. My portfolio showcases projects that involve cleaning, processing, analyzing, and visualizing data, as well as building predictive models and deploying AI-powered solutions.

I have hands-on experience with Python, R, SQL, and big data tools, along with proficiency in statistical analysis, machine learning algorithms, and cloud-based solutions. My focus is on transforming complex datasets into actionable insights that drive business growth and innovation.

Technologies & Tools

Programming Languages: Python, R, SQL, Java, C++

Data Analysis & Manipulation: Pandas, NumPy, SciPy

Data Visualization: Matplotlib, Seaborn, Plotly, Tableau, Power BI

Machine Learning: Scikit-learn, XGBoost, LightGBM, CatBoost

Deep Learning: TensorFlow, Keras, PyTorch, OpenCV

Big Data Tools: Apache Spark, Hadoop

Databases: MySQL, PostgreSQL, MongoDB

Cloud Platforms: AWS (S3, SageMaker), Google Cloud Platform, Azure

MLOps & Deployment: Docker, Flask, FastAPI, Streamlit

Version Control: Git, GitHub, GitLab</p>
     <Button text='login' class='btn-outline-info'/>
        </div>
    </div>
  )
}

export default Main
