interface Props {
  isLogin: boolean;

  onChange: () => void;
}

export function AuthSwitcher({ isLogin, onChange }: Props) {
  return (
    <div className="text-gray-3 text-center text-sm">
      {isLogin ? (
        <>
          حساب ندارید؟
          <button
            onClick={onChange}
            className="text-secondary px-1 font-semibold hover:underline"
          >
            ثبت نام کنید
          </button>
        </>
      ) : (
        <>
          قبلاً ثبت نام کرده‌اید؟
          <button
            onClick={onChange}
            className="text-secondary px-1 font-semibold hover:underline"
          >
            وارد شوید
          </button>
        </>
      )}
    </div>
  );
}
