export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          All rights reserved. Copyright
          © <script>
            document.write(new Date().getFullYear()) 
          </script>
          &nbsp;Super Ecommerce site by Sammai with <i className="fa fa-heart text-danger"></i>&nbsp; 
          <a href="https://samuelyyf.netlify.app" className="text-secondary ms-1" target="_blank">Creative Minds</a>.
        </div>
      </footer>
    </>
  );
}


