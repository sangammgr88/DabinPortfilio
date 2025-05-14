export default function Footer() {
  return (
    <footer className=" mt-16">
      <div className="text justify-center mx-auto px-6 py-10">
        {/* Divider line */}
        <p className="text-sm  text-center ">
          © {new Date().getFullYear()} Dabin Thapa. All rights reserved.
          <br className="block md:hidden" />
          <span className="ml-1">
            Laboratory Scientist & Quality Controller.
          </span>
        </p>
      </div>
    </footer>
  );
}
